import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle, Clock, MapPin, Wrench } from "lucide-react";
import { projects } from "@/data/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Projet introuvable" };

  return {
    title: project.title,
    description: project.shortDescription,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      images: [{ url: project.afterImage }],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/realisations"
            className="inline-flex items-center gap-2 text-white/75 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft size={18} />
            Retour aux réalisations
          </Link>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            {project.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-white/75">
            <span className="flex items-center gap-1.5">
              <MapPin size={16} />
              {project.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={16} />
              {project.timeline}
            </span>
            <span className="text-accent-alt font-medium">{project.budget}</span>
          </div>
        </div>
      </section>

      {/* Before/After */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div>
              <h3 className="font-heading text-xl font-semibold mb-4 text-text-muted">Avant</h3>
              <div className="relative h-72 md:h-96 rounded-xl overflow-hidden shadow-premium">
                <Image
                  src={project.beforeImage}
                  alt={`${project.title} — Avant`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div>
              <h3 className="font-heading text-xl font-semibold mb-4 text-accent">Après</h3>
              <div className="relative h-72 md:h-96 rounded-xl overflow-hidden shadow-premium-lg">
                <Image
                  src={project.afterImage}
                  alt={`${project.title} — Après`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed mb-12">{project.fullDescription}</p>

            {/* Challenges & Solutions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-surface-2 rounded-xl p-6">
                <h3 className="font-heading text-lg font-semibold mb-4 flex items-center gap-2">
                  <Wrench size={20} className="text-accent" />
                  Défis
                </h3>
                <ul className="space-y-2">
                  {project.challenges.map((challenge) => (
                    <li key={challenge} className="flex items-start gap-2 text-sm">
                      <span className="text-accent-alt mt-1 shrink-0">&#8226;</span>
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-surface-2 rounded-xl p-6">
                <h3 className="font-heading text-lg font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle size={20} className="text-accent" />
                  Solutions
                </h3>
                <ul className="space-y-2">
                  {project.solutions.map((solution) => (
                    <li key={solution} className="flex items-start gap-2 text-sm">
                      <CheckCircle size={14} className="text-accent mt-0.5 shrink-0" />
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Materials */}
            <div className="bg-white rounded-xl p-6 shadow-premium">
              <h3 className="font-heading text-lg font-semibold mb-4">
                Matériaux Utilisés
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.materials.map((material) => (
                  <span
                    key={material}
                    className="bg-primary-50 text-primary text-sm px-4 py-1.5 rounded-full"
                  >
                    {material}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-white mb-4">
            Un projet similaire ?
          </h2>
          <p className="text-white/75 mb-8">
            Contactez Michaël pour discuter de votre projet et obtenir un devis personnalisé.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-accent-700 transition-colors"
          >
            Demander un Devis Gratuit
          </Link>
        </div>
      </section>
    </>
  );
}
