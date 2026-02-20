"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  BarChart3,
  Eye,
  MousePointerClick,
  Send,
  Calendar,
  TrendingUp,
  LogOut,
  RefreshCw,
} from "lucide-react";

interface AnalyticsEvent {
  type: string;
  page?: string;
  timestamp: string;
  userAgent?: string;
  referrer?: string;
}

export default function AdminDashboardPage() {
  const [events, setEvents] = useState<AnalyticsEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const fetchData = useCallback(async () => {
    try {
      const res = await fetch("/api/analytics");
      if (res.status === 401) {
        router.push("/admin/login");
        return;
      }
      const data = await res.json();
      if (data.success) {
        setEvents(data.events || []);
      }
    } catch {
      console.error("Failed to fetch analytics");
    } finally {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const now = new Date();
  const today = now.toISOString().split("T")[0];
  const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString();
  const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000).toISOString();

  const totalViews = events.filter((e) => e.type === "page_view").length;
  const todayViews = events.filter(
    (e) => e.type === "page_view" && e.timestamp.startsWith(today)
  ).length;
  const weekViews = events.filter(
    (e) => e.type === "page_view" && e.timestamp >= weekAgo
  ).length;
  const monthViews = events.filter(
    (e) => e.type === "page_view" && e.timestamp >= monthAgo
  ).length;

  const ctaClicks = events.filter((e) => e.type === "cta_click").length;
  const formSubmits = events.filter((e) => e.type === "form_submit").length;
  const conversionRate = totalViews > 0 ? ((formSubmits / totalViews) * 100).toFixed(1) : "0";

  const pageViews = events
    .filter((e) => e.type === "page_view" && e.page)
    .reduce((acc: Record<string, number>, e) => {
      const page = e.page || "/";
      acc[page] = (acc[page] || 0) + 1;
      return acc;
    }, {});

  const topPages = Object.entries(pageViews)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5);

  const handleLogout = () => {
    document.cookie = "adminAuth=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT";
    router.push("/admin/login");
  };

  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-surface pt-20">
        <div className="animate-spin">
          <RefreshCw size={32} className="text-accent" />
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-surface pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-heading text-3xl font-bold">Dashboard</h1>
            <p className="text-text-muted">Statistiques Atelier Le Gall</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={fetchData}
              className="p-2 rounded-lg border border-border hover:bg-surface-2 transition-colors"
              aria-label="Rafraîchir"
            >
              <RefreshCw size={20} />
            </button>
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors"
            >
              <LogOut size={16} />
              Déconnexion
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-premium">
            <div className="flex items-center justify-between mb-4">
              <Eye size={24} className="text-accent" />
              <span className="text-xs text-text-muted bg-surface-2 px-2 py-1 rounded">Total</span>
            </div>
            <p className="text-3xl font-bold">{totalViews}</p>
            <p className="text-text-muted text-sm">Visites totales</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-premium">
            <div className="flex items-center justify-between mb-4">
              <Calendar size={24} className="text-accent" />
              <span className="text-xs text-text-muted bg-surface-2 px-2 py-1 rounded">Aujourd&apos;hui</span>
            </div>
            <p className="text-3xl font-bold">{todayViews}</p>
            <p className="text-text-muted text-sm">Visites du jour</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-premium">
            <div className="flex items-center justify-between mb-4">
              <MousePointerClick size={24} className="text-accent-alt" />
              <span className="text-xs text-text-muted bg-surface-2 px-2 py-1 rounded">CTA</span>
            </div>
            <p className="text-3xl font-bold">{ctaClicks}</p>
            <p className="text-text-muted text-sm">Clics devis</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-premium">
            <div className="flex items-center justify-between mb-4">
              <Send size={24} className="text-accent" />
              <span className="text-xs text-text-muted bg-surface-2 px-2 py-1 rounded">Forms</span>
            </div>
            <p className="text-3xl font-bold">{formSubmits}</p>
            <p className="text-text-muted text-sm">Formulaires envoyés</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Period Stats */}
          <div className="bg-white rounded-xl p-6 shadow-premium">
            <h2 className="font-heading text-xl font-semibold mb-4 flex items-center gap-2">
              <TrendingUp size={20} className="text-accent" />
              Visites par Période
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-border">
                <span className="text-text-muted">Aujourd&apos;hui</span>
                <span className="font-semibold">{todayViews}</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-border">
                <span className="text-text-muted">Cette semaine</span>
                <span className="font-semibold">{weekViews}</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-border">
                <span className="text-text-muted">Ce mois</span>
                <span className="font-semibold">{monthViews}</span>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="text-text-muted">Taux de conversion</span>
                <span className="font-semibold text-accent">{conversionRate}%</span>
              </div>
            </div>
          </div>

          {/* Top Pages */}
          <div className="bg-white rounded-xl p-6 shadow-premium">
            <h2 className="font-heading text-xl font-semibold mb-4 flex items-center gap-2">
              <BarChart3 size={20} className="text-accent" />
              Pages les Plus Visitées
            </h2>
            {topPages.length > 0 ? (
              <div className="space-y-3">
                {topPages.map(([page, count]) => (
                  <div key={page} className="flex items-center justify-between py-2">
                    <span className="text-sm font-medium truncate mr-4">{page}</span>
                    <div className="flex items-center gap-3">
                      <div className="w-32 bg-surface-2 rounded-full h-2 hidden sm:block">
                        <div
                          className="bg-accent rounded-full h-2"
                          style={{
                            width: `${(count / (topPages[0]?.[1] || 1)) * 100}%`,
                          }}
                        />
                      </div>
                      <span className="text-sm font-semibold w-8 text-right">{count}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-text-muted text-sm">Aucune donnée disponible.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
