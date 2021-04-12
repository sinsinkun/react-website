function ProjectEntry(props) {
  return(
    <div className="project-entry">
      <h3>{props.name}</h3>
      <div className="grid-2">
        <div>
          <img src={props.image} alt={props.name} />
        </div>

        <div>
          <p className="my-2">{props.description}</p>
          <p className="my-1">
            Live link:{" "} 
            <a className="port-link" href={props.link} target="_blank" rel="noreferrer">{props.link}</a>
          </p>
          <p className="my-1">
            Github link:{" "} 
            <a href={props.gitLink} target="_blank" rel="noreferrer">{props.gitLink}</a>
          </p>
        </div>

      </div>
    </div>
  )
}

export default ProjectEntry;