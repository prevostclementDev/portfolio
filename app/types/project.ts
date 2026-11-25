export interface ProjectHeroContent {
  label: string
  title: [string, string]
  description: string
  image: string
  imageAlt: string
}

export interface ProjectDetail {
  label: string
  value: string
}

export interface ProjectOverviewContent {
  kicker: string
  title: string
  description: string
  details: ProjectDetail[]
}

export interface ProjectApproachItem {
  title: string
  description: string
}

export interface ProjectApproachContent {
  title: [string, string]
  description: string
  items: ProjectApproachItem[]
  deliverables: string[]
}

export interface ProjectWebsiteContent {
  title: [string, string]
  description: string
  image: string
  imageAlt: string
  buttonText: string
  buttonLink: string
}

export interface ProjectImage {
  src: string
  alt: string
}

export interface Project {
  title: string
  seoTitle: string
  seoDescription: string
  seoImage: string
  relatedTitle: [string, string]
  previewDescription: string
  listDescription: string
  relatedCategory: string
  tags: string[]
  previewImage: string
  previewImageAlt: string
  galleryImages: ProjectImage[]
  link: string
  presentation?: ProjectPresentation
}

export interface ProjectPresentation {
  hero: ProjectHeroContent
  overview: ProjectOverviewContent
  approach: ProjectApproachContent
  website: ProjectWebsiteContent
}
