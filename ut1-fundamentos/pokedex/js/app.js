const formulario = document.querySelector("#formulario-busqueda");
const inputBusqueda = document.querySelector("#busqueda");
const mensaje = document.querySelector("#mensaje");
const resultado = document.querySelector("#resultado");
const filtroTipo = document.querySelector("#filtro-tipo");
const ordenar = document.querySelector("#ordenar");
const shiny = document.querySelector("#shiny");
const paginacion = document.querySelector("#paginacion");

let pokemons = [];

let paginaActual = 1;
const pokemonsPorPagina = 12;
let pokemonsMostrados = [];

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
        imagenShiny: datos.sprites.front_shiny,
        altura: datos.height,
        peso: datos.weight,
        tipos: datos.types.map(({ type }) => type.name),
        experiencia: datos.base_experience,
        habilidades: datos.abilities.map(({ ability }) => ability.name),
        movimientos: datos.moves
            .slice(0, 6)
            .map(({ move }) => move.name),
        estadisticas: datos.stats.map(({ base_stat, stat }) => ({
            nombre: stat.name,
            valor: base_stat
        }))
    };
};

const formatearId = (id) => {
    return String(id).padStart(3, "0");
};

const obtenerFavoritos = () => {
    return JSON.parse(localStorage.getItem("favoritos")) || [];
};

const esFavorito = (pokemon) => {
    const favoritos = obtenerFavoritos();

    return favoritos.includes(pokemon.id);
};

const cambiarFavorito = (pokemon) => {
    let favoritos = obtenerFavoritos();

    if (favoritos.includes(pokemon.id)) {
        favoritos = favoritos.filter((id) => id !== pokemon.id);
    } else {
        favoritos.push(pokemon.id);
    }

    localStorage.setItem("favoritos", JSON.stringify(favoritos));
};

const crearTarjeta = (pokemon) => {
    const tiposHTML = pokemon.tipos
        .map((tipo) => `<span class="tipo ${tipo}">${tipo}</span>`)
        .join("");

    const imagen = shiny.checked
        ? pokemon.imagenShiny
        : pokemon.imagenTrasera;

    return `
        <article class="pokemon">
            <p class="pokemon__numero">
                N.º ${formatearId(pokemon.id)}
            </p>

            <img
                class="pokemon__imagen"
                src="${imagen}"
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

            <button class="pokemon__detalles">
                Ver detalles
            </button>
        </article>
    `;
};

const mostrarDetalles = (pokemon) => {
    const habilidadesHTML = pokemon.habilidades
        .map((habilidad) => `<li>${habilidad}</li>`)
        .join("");

    const movimientosHTML = pokemon.movimientos
        .map((movimiento) => `<li>${movimiento}</li>`)
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

    const indice = pokemonsMostrados.findIndex((pokemonActual) => {
        return pokemonActual.id === pokemon.id;
    });

    resultado.insertAdjacentHTML(
        "beforeend",
        `
        <div class="pokemon__panel">
            <div class="pokemon__panel-contenido">

                <div class="pokemon__cabecera">
                    <span class="pokemon__pagina">
                        Página ${paginaActual} de ${Math.ceil(
                            pokemonsMostrados.length / pokemonsPorPagina
                        )}
                    </span>

                    <button class="pokemon__cerrar">
                        Cerrar
                    </button>
                </div>

                <p>
                    N.º ${formatearId(pokemon.id)}
                </p>

                <h2>${pokemon.nombre}</h2>

                <button class="pokemon__favorito ${esFavorito(pokemon) ? "favorito-activo" : ""
        }">
                    ${esFavorito(pokemon)
            ? "★ Quitar de favoritos"
            : "☆ Añadir a favoritos"
        }
                </button>

                <img
                    src="${shiny.checked
            ? pokemon.imagenShiny
            : pokemon.imagenFrontal
        }"
                    alt="Imagen de ${pokemon.nombre}"
                    class="pokemon__imagen-detalle"
                >

                <div class="pokemon__navegacion">
                    <button class="pokemon__anterior">
                        Anterior
                    </button>

                    <button class="pokemon__siguiente">
                        Siguiente
                    </button>
                </div>

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

                <h3>Movimientos</h3>

                <ul>
                    ${movimientosHTML}
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

    const botonCerrar =
        panel.querySelector(".pokemon__cerrar");

    const botonAnterior =
        panel.querySelector(".pokemon__anterior");

    const botonSiguiente =
        panel.querySelector(".pokemon__siguiente");

    const botonFavorito =
        panel.querySelector(".pokemon__favorito");

    botonCerrar.addEventListener("click", () => {
        panel.remove();
    });

    botonFavorito.addEventListener("click", () => {
        cambiarFavorito(pokemon);

        botonFavorito.textContent = esFavorito(pokemon)
            ? "★ Quitar de favoritos"
            : "☆ Añadir a favoritos";

        botonFavorito.classList.toggle(
            "favorito-activo",
            esFavorito(pokemon)
        );
    });

    if (indice === 0) {
        botonAnterior.disabled = true;
    }

    if (indice === pokemonsMostrados.length - 1) {
        botonSiguiente.disabled = true;
    }

    botonAnterior.addEventListener("click", () => {
        if (indice > 0) {
            panel.remove();

            paginaActual = Math.ceil(
                indice / pokemonsPorPagina
            );

            mostrarPokemons(pokemonsMostrados);

            const pokemonAnterior =
                pokemonsMostrados[indice - 1];

            mostrarDetalles(pokemonAnterior);
        }
    });

    botonSiguiente.addEventListener("click", () => {
        if (indice < pokemonsMostrados.length - 1) {
            panel.remove();

            paginaActual = Math.floor(
                (indice + 1) / pokemonsPorPagina
            ) + 1;

            mostrarPokemons(pokemonsMostrados);

            const pokemonSiguiente =
                pokemonsMostrados[indice + 1];

            mostrarDetalles(pokemonSiguiente);
        }
    });
};

const mostrarPokemons = (lista) => {
    pokemonsMostrados = lista;

    const inicio =
        (paginaActual - 1) * pokemonsPorPagina;

    const fin = inicio + pokemonsPorPagina;

    const pokemonsPagina = lista.slice(inicio, fin);

    resultado.innerHTML = pokemonsPagina
        .map((pokemon) => crearTarjeta(pokemon))
        .join("");

    const tarjetas =
        resultado.querySelectorAll(".pokemon");

    tarjetas.forEach((tarjeta, indice) => {
        const imagen =
            tarjeta.querySelector(".pokemon__imagen");

        const pokemon = pokemonsPagina[indice];

        const botonDetalles =
            tarjeta.querySelector(".pokemon__detalles");

        tarjeta.addEventListener("mouseenter", () => {
            if (!shiny.checked) {
                imagen.src = pokemon.imagenFrontal;
            }
        });

        tarjeta.addEventListener("mouseleave", () => {
            if (!shiny.checked) {
                imagen.src = pokemon.imagenTrasera;
            }
        });

        botonDetalles.addEventListener("click", (evento) => {
            evento.stopPropagation();

            mostrarDetalles(pokemon);
        });
    });

    mostrarPaginacion();
};

const mostrarPaginacion = () => {
    const totalPaginas = Math.ceil(
        pokemonsMostrados.length / pokemonsPorPagina
    );

    paginacion.innerHTML = "";

    if (totalPaginas <= 1) {
        return;
    }

    paginacion.innerHTML = `
        <span>
            Página ${paginaActual} de ${totalPaginas}
        </span>
    `;
};

const ordenarPokemons = (lista) => {
    const copia = [...lista];

    if (ordenar.value === "numero") {
        copia.sort((a, b) => a.id - b.id);
    }

    if (ordenar.value === "nombre") {
        copia.sort((a, b) =>
            a.nombre.localeCompare(b.nombre)
        );
    }

    if (ordenar.value === "peso") {
        copia.sort((a, b) => a.peso - b.peso);
    }

    if (ordenar.value === "altura") {
        copia.sort((a, b) => a.altura - b.altura);
    }

    if (ordenar.value === "experiencia") {
        copia.sort(
            (a, b) => a.experiencia - b.experiencia
        );
    }

    return copia;
};

const cargarPokemons = async () => {
    mensaje.textContent = "Cargando Pokémon...";

    try {
        const peticiones = [];

        for (let id = 1; id <= 151; id++) {
            peticiones.push(obtenerPokemon(id));
        }

        pokemons = await Promise.all(peticiones);

        crearFiltrosTipo();

        paginaActual = 1;

        mostrarPokemons(pokemons);

        mensaje.textContent =
            "Aplicación preparada. Puedes buscar un Pokémon.";
    } catch (error) {
        mensaje.textContent =
            "No se han podido cargar los Pokémon.";

        console.error(error);
    }
};

const crearFiltrosTipo = () => {
    const tipos = pokemons.flatMap(
        (pokemon) => pokemon.tipos
    );

    const tiposUnicos = [...new Set(tipos)];

    tiposUnicos.sort();

    tiposUnicos.forEach((tipo) => {
        filtroTipo.innerHTML += `
            <option value="${tipo}">
                ${tipo}
            </option>
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

        paginacion.innerHTML = "";

        mensaje.textContent =
            "No se ha encontrado ningún Pokémon.";

        paginaActual = 1;

        return;
    }

    mensaje.textContent = "";

    paginaActual = 1;

    mostrarPokemons(
        ordenarPokemons(resultados)
    );
};

inputBusqueda.addEventListener(
    "input",
    filtrarPokemons
);

filtroTipo.addEventListener(
    "change",
    filtrarPokemons
);

ordenar.addEventListener(
    "change",
    filtrarPokemons
);

shiny.addEventListener("change", () => {
    filtrarPokemons();
});

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    filtrarPokemons();
});

cargarPokemons();