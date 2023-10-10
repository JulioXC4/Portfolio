import Details from "../../components/Details"

import projectsData from "@/db/projects/projects.data"

export default function Page({ params }) {
  const project = projectsData.find((p) => p.id === parseInt(params.projectId, 10))
  if (!project) {
    //usar el archivo not-found de next13 (archivo global)
    return <p>Proyecto no encontrado</p>
  }
  return (
    <div>
      <Details project={project} />
    </div>
  )
  }