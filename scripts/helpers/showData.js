export const showData = (data, container) => {
    container.innerHTML = "";
    const modalTemplate = `
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel"></h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Agregar a favoritos</button>
        </div>
      </div>
    `;
  
    data.forEach((element) => {
      let { id, name, image, descripcion, autor, favorito } = element;
      const div = document.createElement("div");
      div.classList.add("libro");
      div.setAttribute("id", id);
      div.innerHTML = `
        <div class="card" style="width: 100%;">
          <img src="${image}" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <h6 class="card-title">${autor}</h6>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Mas informacion
            </button>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  ${modalTemplate.replace('${name}', name).replace('${descripcion}', descripcion)}
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
      container.appendChild(div);
    });

  };