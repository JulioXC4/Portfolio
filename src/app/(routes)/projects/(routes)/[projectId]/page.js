import Details from "../../components/Details"
import sampleProjects from "../../components/data"

export default function Page({ params }) {
  const project = sampleProjects.find((p) => p.id === parseInt(params.projectId, 10))
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