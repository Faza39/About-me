function tampilkanProyekBaru() {
    const projectsection = document.getElementById('projects');
    const newproject = document.createElement('div');
    newproject.className = 'project';
    newproject.innerHTML = '
       <h3>ProyekBaru</h3>
       <p>Ini adalah proyek tambahan yang ditambahkan dengan JavaScript.</p>
    ';
    projectSection.appendChild(newProject);
}