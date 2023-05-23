'use strict'

const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const correo = document.getElementById('correo');
const celular = document.getElementById('celular');
const comentarios = document.getElementById('comentarios');
const names = document.getElementById('name');
const surname = document.getElementById('surname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const coments = document.getElementById('coments');
const aceptar = document.getElementById('aceptar')

const form = {
    nombre: '',
    apellidos: '',
    correo: '',
    celular: '',
    comentarios: ''
}

const resp = {
    nombre: {
        text: 'El nombre no puede estar vacio',
        color: 'red'
    },
    apellido: {
        text: 'El Apellido no puede estar vacio',
        color: 'red'
    },
    correo: {
        text: 'El correo no puede estar vacio',
        color: 'red'
    },
    celular: {
        text: 'El celular no puede estar vacio',
        color: 'red'
    },
    comentarios: {
        text: 'El comentario no puede estar vacio',
        color: 'red'
    }
}


// VENTANA MODAL

// Crear elementos con atributos e hijo
const createCustomElement = (element, attributes, children) => {
    let customElement = document.createElement(element);
    if (children !== undefined) children.forEach(el => {
      if (el.nodeType) {
        if (el.nodeType === 1 || el.nodeType === 11) customElement.appendChild(el);
      } else {
        customElement.innerHTML += el;
      }
    });
    addAttributes(customElement, attributes);
    return customElement;
  };

  // Añadir un objeto de atributos a un elemento
  const addAttributes = (element, attrObj) => {
    for (let attr in attrObj) {
      if (attrObj.hasOwnProperty(attr)) element.setAttribute(attr, attrObj[attr])
    }
  };


  // imprimir modal

  const printModal = content => {
    // crear contenedor interno
    const modalContentEl = createCustomElement('div', {
      id: 'ed-modal-content',
      class: 'ed-modal-content'
    }, [content]),
      // crear contenedor principal
      modalContainerEl = createCustomElement('div', {
        id: 'ed-modal-container',
        class: 'ed-modal-container'
      }, [modalContentEl]);
    // imprimir el modal
    document.body.appendChild(modalContainerEl);

    // Remover el modal
    const removeModal = () =>
      document.body.removeChild(modalContainerEl);
    modalContainerEl.addEventListener('click', e => {
      if(e.target === modalContainerEl){
        removeModal();
      }
    })

  }


nombre.addEventListener('input',(e) =>{
    form.nombre = e.target.value;
})

apellido.addEventListener('input', (e) => {
    form.apellidos = e.target.value;
})

correo.addEventListener('input', (e) => {
    form.correo = e.target.value;
})

celular.addEventListener('input', (e) => {
    form.celular = e.target.value;
})

comentarios.addEventListener('input', (e) => {
    form.comentarios = e.target.value;
})


const validationName = () => {
    if (!form.nombre) {
        names.innerHTML = resp.nombre.text;
        names.style.color = resp.nombre.color;
        return false;
    }else{
        names.innerHTML = '';
        return true;
    }
}

const validationSurname = () => {
    if (!form.apellidos) {
        surname.innerHTML = resp.apellido.text;
        surname.style.color = resp.apellido.color;
        return false;
    }else{
        surname.innerHTML = ''
        return true;
    }
}

const validationEmail = () => {
    if (!form.correo) {
        email.innerHTML = resp.correo.text;
        email.style.color = resp.correo.color;
        return false;
    }else{
        email.innerHTML = '';
        return true;
    }
}
const validationPhone = () => {
    if (!form.celular) {
        phone.innerHTML = resp.celular.text;
        phone.style.color = resp.celular.color;
        return false;
    }else{
        phone.innerHTML = '';
        return true;
    }
}

const validationComents = () => {
    if (!form.comentarios) {
        coments.innerHTML = resp.comentarios.text;
        coments.style.color = resp.comentarios.color;
        return false;
    }else{
        coments.innerHTML = '';
        return true;
    }
}


const validations = () => {
    let nombre = validationName();
    let apellido = validationSurname();
    let correo = validationEmail();
    let telefono = validationPhone();
    let comentarios = validationComents();
    if (nombre && apellido && correo && telefono && comentarios) {
        console.log(form)
        printModal(`<img src='../asset/img/registro.png'>`)
        cleanForm();
    }
}

const cleanForm = ()=>{
    nombre.value = '';
    apellido.value = '';
    correo.value = '';
    celular.value = '';
    comentarios.value = '';
}



aceptar.addEventListener('click', (e) => {
    e.preventDefault();
    validations();

})