document.addEventListener("DOMContentLoaded", function () {
//venta
    const propiedades_venta = [
    {
    imagen: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
    nombre: 'Apartamento de lujo en zona exclusiva',
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
    habitaciones: '4',
    baños: '4',
    precio: '5,000',
    smoke: false,
    pets: false,
    },
    {
    imagen: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    nombre: 'Apartamento acogedor en la montaña',
    descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
    ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
    habitaciones: '2',
    baños: '1',
    precio: '1,200',
    smoke: true,
    pets: true,
    },
    {
    imagen: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
    nombre: 'Penthouse de lujo con terraza panorámica',
    descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
    ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
    habitaciones: '3',
    baños: '3',
    precio: '4,500',
    smoke: false,
    pets: true,
    },
    // extras
    {
    imagen: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
    nombre: 'Otro apartamento de lujo en zona exclusiva',
    descripcion: 'Este otro apartamento de lujo está ubicado en una exclusiva zona residencial',
    ubicacion: '123 otro Luxury Lane, Prestige Suburb, CA 45678',
    habitaciones: '5',
    baños: '3',
    precio: '6,000',
    smoke: false,
    pets: false,
    },
    {
    imagen: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    nombre: 'Apartamento acogedor en otra montaña',
    descripcion: 'Este apartamento acogedor está situado en lo alto de otra montaña con impresionantes vistas',
    ubicacion: '789 Mountain otro Road, Summit Peaks, CA 23456',
    habitaciones: '7',
    baños: '3',
    precio: '4,900',
    smoke: true,
    pets: false,
    },
    {
    imagen: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
    nombre: 'Penthouse de otro lujo con otra terraza panorámica',
    descripcion: 'Este otro penthouse de otro lujo ofrece una terraza panorámica con otras vistas espectaculares',
    ubicacion: '567 Skyline Avenue, Skyview Lala City, CA 56789',
    habitaciones: '6',
    baños: '4',
    precio: '3,500',
    smoke: true,
    pets: true,
    },
    ];
//alquiler    
    const propiedades_alquiler = [
    {
    imagen: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
    nombre: 'Apartamento en el centro de la ciudad',
    descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: '2',
    baños: '2',
    precio: '2,000',
    smoke: false,
    pets: true,
    },
    {
    imagen: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    nombre: 'Apartamento luminoso con vista al mar',
    descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
    ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
    habitaciones: '3',
    baños: '3',
    precio: '2,500',
    smoke: true,
    pets: true,
    },
    {
    imagen: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    nombre: 'Condominio moderno en zona residencial',
    descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: '2',
    baños: '2',
    precio: '2,200',
    smoke: false,
    pets: false,
    },
    //extras
    {
    imagen: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
    nombre: 'Apartamento en el otro centro de la ciudad',
    descripcion: 'Este apartamento de otras 2 habitaciones está ubicado en el otro corazón de la otra ciudad, cerca de todo',
    ubicacion: '123 Main Meh Street, Anytown, CA 91234',
    habitaciones: '5',
    baños: '1',
    precio: '8,000',
    smoke: false,
    pets: true,
    },
    {
    imagen: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    nombre: 'Apartamento luminoso con otra vista al mar',
    descripcion: 'Este hermoso apartamento ofrece una vista impresionante al otro mar',
    ubicacion: '456 Ocean Bob Esponja Avenue, Seaside Town, CA 56789',
    habitaciones: '6',
    baños: '7',
    precio: '6,500',
    smoke: true,
    pets: true,
    },
    {
    imagen: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    nombre: 'Condominio moderno en otra zona residencial',
    descripcion: 'Este otro elegante condominio moderno está ubicado en otra tranquila zona residencial',
    ubicacion: '123 Main AAA Street, Anytown, CA 91234',
    habitaciones: '6',
    baños: '8',
    precio: '1,200',
    smoke: false,
    pets: false,
    }
    ];

//3 de venta en index
function propiedadesVentaEnIndex() {
    const containerVenta = document.querySelector('#venta .row');
    containerVenta.innerHTML = ''; 
    for (let i = 0; i < 3; i++) {
        const propiedad = propiedades_venta[i];
        let card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${propiedad.imagen}" alt="${propiedad.nombre}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${propiedad.nombre}</h5>
                <p class="card-text">${propiedad.descripcion}</p>
                <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
                <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${propiedad.baños} Baños</p>
                <p class="card-text"><i class="fas fa-dollar-sign"></i>${propiedad.precio}</p>
                <p class="${propiedad.smoke ? 'text-success' : 'text-danger'}">
                <i class="${propiedad.smoke ? 'fas fa-smoking' : 'fas fa-smoking-ban'}"></i> ${propiedad.smoke ? 'Permitido fumar' : 'No se permite fumar'}</p>
                <p class="${propiedad.pets ? 'text-success' : 'text-danger'}">
                <i class="${propiedad.pets ? 'fas fa-paw' : 'fas fa-ban'}"></i>${propiedad.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}</p>
            </div>`;
            containerVenta.appendChild(card);
    }
}

//3 de alquiler en index
function propiedadesAlquilerEnIndex() {
    const containerAlquiler = document.querySelector('#alquiler .row');
    containerAlquiler.innerHTML = '';
    for (let i = 0; i < 3; i++) {
        const propiedad = propiedades_alquiler[i];
        let card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${propiedad.imagen}" alt="${propiedad.nombre}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${propiedad.nombre}</h5>
                <p class="card-text">${propiedad.descripcion}</p>
                <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
                <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${propiedad.baños} Baños</p>
                <p class="card-text"><i class="fas fa-dollar-sign"></i>${propiedad.precio}</p>
                <p class="${propiedad.smoke ? 'text-success' : 'text-danger'}">
                <i class="${propiedad.smoke ? 'fas fa-smoking' : 'fas fa-smoking-ban'}"></i> ${propiedad.smoke ? 'Permitido fumar' : 'No se permite fumar'}</p>
                <p class="${propiedad.pets ? 'text-success' : 'text-danger'}">
                <i class="${propiedad.pets ? 'fas fa-paw' : 'fas fa-ban'}"></i>${propiedad.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}</p>
            </div>`;
            containerAlquiler.appendChild(card);
    }
}

//Todo venta
function propiedadesVenta() {
    const containerVenta = document.querySelector('#venta-propiedades');
    containerVenta.innerHTML = '';
    for (let i = 0; i < propiedades_venta.length; i++) {
        const propiedad = propiedades_venta[i];
        let card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${propiedad.imagen}" alt="${propiedad.nombre}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${propiedad.nombre}</h5>
                <p class="card-text">${propiedad.descripcion}</p>
                <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
                <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${propiedad.baños} Baños</p>
                <p class="card-text"><i class="fas fa-dollar-sign"></i>${propiedad.precio}</p>
                <p class="${propiedad.smoke ? 'text-success' : 'text-danger'}">
                <i class="${propiedad.smoke ? 'fas fa-smoking' : 'fas fa-smoking-ban'}"></i> ${propiedad.smoke ? 'Permitido fumar' : 'No se permite fumar'}</p>
                <p class="${propiedad.pets ? 'text-success' : 'text-danger'}">
                <i class="${propiedad.pets ? 'fas fa-paw' : 'fas fa-ban'}"></i>${propiedad.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}</p>
            </div>`;
            containerVenta.appendChild(card);
    }
}

//Todo alquiler
function propiedadesAlquiler() {
    const containerAlquiler = document.querySelector('#alquiler-propiedades');
    containerAlquiler.innerHTML = ''; 
    for (let i = 0; i < propiedades_alquiler.length; i++) {
        const propiedad = propiedades_alquiler[i];
        let card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${propiedad.imagen}" alt="${propiedad.nombre}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${propiedad.nombre}</h5>
                <p class="card-text">${propiedad.descripcion}</p>
                <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
                <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${propiedad.baños} Baños</p>
                <p class="card-text"><i class="fas fa-dollar-sign"></i>${propiedad.precio}</p>
                <p class="${propiedad.smoke ? 'text-success' : 'text-danger'}">
                <i class="${propiedad.smoke ? 'fas fa-smoking' : 'fas fa-smoking-ban'}"></i> ${propiedad.smoke ? 'Permitido fumar' : 'No se permite fumar'}</p>
                <p class="${propiedad.pets ? 'text-success' : 'text-danger'}">
                <i class="${propiedad.pets ? 'fas fa-paw' : 'fas fa-ban'}"></i>${propiedad.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}</p>
            </div>`;
        containerAlquiler.appendChild(card);
    }
}

if (document.querySelector('#venta')){
    propiedadesVentaEnIndex();
}
if (document.querySelector('#venta-propiedades')) {
    propiedadesVenta();
}
if (document.querySelector('#alquiler')) {
    propiedadesAlquilerEnIndex();
}
if (document.querySelector('#alquiler-propiedades')){
    propiedadesAlquiler();
}   
});

