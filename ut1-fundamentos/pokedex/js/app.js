const formulario = document.querySelector("#formulario-busqueda");
const inputBusqueda = document.querySelector("#busqueda");
const mensaje = document.querySelector("#mensaje");
const resultado = document.querySelector("#resultado");
const filtroTipo = document.querySelector("#filtro-tipo");

let pokemons = [];

const obtenerPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const respuesta = await fetch(url);

    if (!respuesta.ok) {
        throw new Error("Pokémon no encontrado.");
    }

    const datos = await respuesta.json();

    return {
        id: datos.id,
        nombre: datos.name,
        imagenFrontal: datos.sprites.front_default,
        imagenTrasera: datos.sprites.back_default,
        altura: datos.height,
        peso: datos.weight,
        tipos: datos.types.map(({ type }) => type.name),
        experiencia: datos.base_experience,
        habilidades: datos.abilities.map(({ ability }) => ability.name),
        estadisticas: datos.stats.map(({ base_stat, stat }) => ({
            nombre: stat.name,
            valor: base_stat
        })),
    };
};

const formatearId = (id) => {
    return String(id).padStart(3, "0");
};

const crearTarjeta = (pokemon) => {
    const tiposHTML = pokemon.tipos
        .map((tipo) => `<span class="tipo ${tipo}">${tipo}</span>`)
        .join("");

    return `
        <article class="pokemon">
            <p class="pokemon__numero">
                N.º ${formatearId(pokemon.id)}
            </p>

            <img
                class="pokemon__imagen"
                src="${pokemon.imagenTrasera}"
                alt="Imagen de ${pokemon.nombre}"
            >

            <h2 class="pokemon__nombre">
                ${pokemon.nombre}
            </h2>

            <div class="pokemon__datos">
                <p>
                    <strong>Altura</strong><br>
                    ${pokemon.altura / 10} m
                </p>

                <p>
                    <strong>Peso</strong><br>
                    ${pokemon.peso / 10} kg
                </p>
            </div>

            <div class="pokemon__tipos">
                ${tiposHTML}
            </div>

            <button class="pokemon__detalles">Ver detalles</button>
        </article>
    `;
};

const mostrarDetalles = (pokemon) => {
    const habilidadesHTML = pokemon.habilidades
        .map((habilidad) => `<li>${habilidad}</li>`)
        .join("");

    const estadisticasHTML = pokemon.estadisticas
        .map((estadistica) => {
            let nombre = estadistica.nombre;

            if (nombre === "hp") {
                nombre = "Puntos de salud";
            }

            if (nombre === "attack") {
                nombre = "Ataque";
            }

            if (nombre === "defense") {
                nombre = "Defensa";
            }

            if (nombre === "special-attack") {
                nombre = "Ataque especial";
            }

            if (nombre === "special-defense") {
                nombre = "Defensa especial";
            }

            if (nombre === "speed") {
                nombre = "Velocidad";
            }

            return `
                <li>
                    <strong>${nombre}:</strong>
                    ${estadistica.valor}
                </li>
            `;
        })
        .join("");

    resultado.insertAdjacentHTML(
        "beforeend",
        `
        <div class="pokemon__panel">
            <div class="pokemon__panel-contenido">

                <button class="pokemon__cerrar">
                    Cerrar
                </button>

                <p>
                    N.º ${formatearId(pokemon.id)}
                </p>

                <h2>${pokemon.nombre}</h2>

                <img
                    src="${pokemon.imagenFrontal}"
                    alt="Imagen de ${pokemon.nombre}"
                    class="pokemon__imagen-detalle"
                >

                <h3>Información</h3>

                <div class="pokemon__informacion">
                    <p>
                        <strong>Tipo:</strong>
                        ${pokemon.tipos.join(", ")}
                    </p>

                    <p>
                        <strong>Altura:</strong>
                        ${pokemon.altura / 10} m
                    </p>

                    <p>
                        <strong>Peso:</strong>
                        ${pokemon.peso / 10} kg
                    </p>

                    <p>
                        <strong>Experiencia base:</strong>
                        ${pokemon.experiencia}
                    </p>
                </div>

                <h3>Habilidades</h3>

                <ul>
                    ${habilidadesHTML}
                </ul>

                <h3>Estadísticas base</h3>

                <ul>
                    ${estadisticasHTML}
                </ul>

            </div>
        </div>
        `
    );

    const panel = resultado.querySelector(".pokemon__panel");
    const botonCerrar = panel.querySelector(".pokemon__cerrar");

    botonCerrar.addEventListener("click", () => {
        panel.remove();
    });
};


const mostrarPokemons = (lista) => {
    resultado.innerHTML = lista
        .map((pokemon) => crearTarjeta(pokemon))
        .join("");

    const tarjetas = resultado.querySelectorAll(".pokemon");

    tarjetas.forEach((tarjeta, indice) => {
        const imagen = tarjeta.querySelector(".pokemon__imagen");
        const pokemon = lista[indice];
        const botonDetalles = tarjeta.querySelector(".pokemon__detalles");

        tarjeta.addEventListener("mouseenter", () => {
            imagen.src = pokemon.imagenFrontal;
        });

        tarjeta.addEventListener("mouseleave", () => {
            imagen.src = pokemon.imagenTrasera;
        });

        botonDetalles.addEventListener("click", (evento) => {
            evento.stopPropagation();
            mostrarDetalles(pokemon);
        });
    });
};

const cargarPokemons = async () => {
    mensaje.textContent = "Preparado para comenzar.";
    mensaje.textContent = "Cargando Pokémon...";

    try {
        const peticiones = [];

        for (let id = 1; id <= 151; id++) {
            peticiones.push(obtenerPokemon(id));
        }

        pokemons = await Promise.all(peticiones);

        crearFiltrosTipo();
        mostrarPokemons(pokemons);

        mensaje.textContent = "Aplicación preparada. Puedes buscar un Pokémon.";
    } catch (error) {
        mensaje.textContent = "No se han podido cargar los Pokémon.";
    }
};

const crearFiltrosTipo = () => {
    const tipos = pokemons.flatMap((pokemon) => pokemon.tipos);
    const tiposUnicos = [...new Set(tipos)];

    tiposUnicos.sort();

    tiposUnicos.forEach((tipo) => {
        filtroTipo.innerHTML += `
            <option value="${tipo}">${tipo}</option>
        `;
    });
};


const filtrarPokemons = () => {
    const busqueda = inputBusqueda.value
        .trim()
        .toLowerCase();

    const tipoSeleccionado = filtroTipo.value;

    const resultados = pokemons.filter((pokemon) => {


        const coincideBusqueda =
            !busqueda ||
            pokemon.nombre.includes(busqueda) ||
            String(pokemon.id) === busqueda;


        const coincideTipo =
            tipoSeleccionado === "todos" ||
            pokemon.tipos.includes(tipoSeleccionado);


        return coincideBusqueda && coincideTipo;
    });

    if (resultados.length === 0) {
        resultado.innerHTML = "";
        mensaje.textContent = "No se ha encontrado ningún Pokémon.";
        return;
    }

    mensaje.textContent = "";
    mostrarPokemons(resultados);

};



inputBusqueda.addEventListener("input", filtrarPokemons);
filtroTipo.addEventListener("change", filtrarPokemons);


formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    filtrarPokemons();
});

cargarPokemons();
