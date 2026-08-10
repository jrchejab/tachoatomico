// ===== COMPONENTES COMPARTIDOS =====
// Funciones para renderizar headers, navs y contenido

// ---- Puntos aleatorios alrededor de menús ----
function agregarPuntos(selector, distMax) {
  distMax = distMax || 28;
  document.querySelectorAll(selector).forEach(function(link) {
    var dot = document.createElement('span');
    dot.className = 'dot';
    var angle = Math.random() * 360;
    var dist = distMax/2 + Math.random() * distMax/2;
    var x = Math.cos(angle * Math.PI / 180) * dist;
    var y = Math.sin(angle * Math.PI / 180) * dist;
    dot.style.left = '50%';
    dot.style.top = '50%';
    dot.style.marginLeft = x + 'px';
    dot.style.marginTop = y + 'px';
    dot.style.transform = 'translate(-50%, -50%)';
    link.appendChild(dot);
  });
}

// ---- Render obras agrupadas por complemento_titulo ----
function renderObrasAgrupadas(containerId, renderFn) {
  renderFn = renderFn || obraHTML;
  var el = document.getElementById(containerId);
  if (!el) return;
  var grupos = {};
  CONTENIDO.obras.forEach(function(o) {
    var g = o.complemento_titulo || 'sin grupo';
    if (!grupos[g]) grupos[g] = [];
    grupos[g].push(o);
  });
  Object.keys(grupos).forEach(function(g) {
    el.innerHTML += '<div class="grupo-arte">' +
      '<div class="grupo-titulo">' + g + '</div>';
    if (CONTENIDO.grupos_texto && CONTENIDO.grupos_texto[g]) {
      el.innerHTML += '<div class="grupo-texto">' + CONTENIDO.grupos_texto[g] + '</div>';
    }
    el.innerHTML += '<div class="grupo-obras">';
    grupos[g].forEach(function(o) {
      el.innerHTML += renderFn(o);
    });
    el.innerHTML += '</div></div>';
  });
}

// ---- Header página principal (index / tachoatomico) ----
function renderMainHeader(containerId) {
  var el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML =
    '<header>' +
      '<img src="imagenes/logo_sign.png" alt="TACHOATOMICO">' +
      '<h1>@TACHOATOMICO</h1>' +
      '<div class="tagline">. enganche cuántico con el arte .</div>' +
      '<div class="meta-tags">: bits : : códigos : : objetos : : flujo :</div>' +
    '</header>';
}

// ---- Header páginas interiores (bio, arte, expo) ----
function renderInnerHeader(containerId) {
  var el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML =
    '<div class="top-bar">' +
      '<a href="index.html" class="inicio-link">INICIO</a>' +
      '<div class="logo-group">' +
        '<img src="imagenes/logo_sign.png" alt="TACHOATOMICO">' +
        '<h1>@TACHOATOMICO</h1>' +
        '<nav id="nav-menu">' +
          '<a href="bio.html">bio</a>' +
          '<a href="arte.html">arte</a>' +
          '<a href="expo.html">expo</a>' +
        '</nav>' +
      '</div>' +
    '</div>';
}

// ---- Timeline item ----
function timelineHTML(items) {
  var html = '<div class="timeline">';
  items.forEach(function(item) {
    html += '<div class="timeline-item">' +
      '<div class="year">' + item.year + '</div>' +
      '<div>' +
        '<div class="role">' + item.role + '</div>' +
        (item.place ? '<div class="place">' + item.place + '</div>' : '') +
        (item.desc ? '<div class="desc">' + item.desc + '</div>' : '') +
      '</div>' +
    '</div>';
  });
  html += '</div>';
  return html;
}

// ---- Proyecto card ----
function proyectoHTML(p) {
  return '<div class="proyecto">' +
    '<h3>' + p.title + '</h3>' +
    (p.meta ? '<div class="sub">' + p.meta + '</div>' : '') +
    '<p>' + p.text + '</p>' +
  '</div>';
}

// ---- Exposición card ----
function expoCardHTML(e) {
  return '<div class="expo-card">' +
    '<h3>' + e.title + '</h3>' +
    (e.meta ? '<div class="meta">' + e.meta + '</div>' : '') +
    '<p>' + e.text + '</p>' +
  '</div>';
}

// ---- Obra de arte en fila (portafolio) ----
function obraFilaHTML(o) {
  var html = '<div class="fila-item">';

  // Col 1 — Imagen principal
  html += '<div class="fila-media">';
  if (o.imgs && o.imgs.length) {
    html += '<img src="imagenes/' + o.imgs[0] + '" alt="' + o.titulo + '">';
  }
  html += '</div>';

  // Col 2 — Textos + imágenes extras
  html += '<div class="fila-texto-col">';

  html += '<div class="fila-texto">';
  html += '<div class="obra-encabezado">';
  html += '<div class="obra-titulo">' + o.titulo + '</div>';
  html += '<div class="obra-complemento">' + o.complemento_titulo + '</div>';
  if (o.exposicion) {
    html += '<div class="obra-exposicion">Exposición: ' + o.exposicion + '</div>';
  }
  html += '<div class="obra-año">' + o.año + '</div>';
  html += '</div>';

  html += '<div class="obra-descripcion">' + o.descripcion + '</div>';
  if (o.descripcion_extras) {
    o.descripcion_extras.forEach(function(ex) {
      html += '<p class="obra-extra">' + ex + '</p>';
    });
  }

  if (o.links && o.links.length) {
    html += '<div class="obra-links">';
    o.links.forEach(function(l) {
      html += '<a href="' + l.url + '" target="_blank">' + l.label + '</a>';
    });
    html += '</div>';
  }

  // Partes (imagen derecha, texto izquierda)
  if (o.partes && o.partes.length) {
    html += '<div class="obra-partes">';
    o.partes.forEach(function(p) {
      html += '<div class="obra-parte">' +
        '<div class="obra-parte-texto"><strong>' + p.titulo + ':</strong> ' + p.texto + '</div>' +
        '<div class="obra-parte-img"><img src="imagenes/' + p.imagen + '" alt="' + p.titulo + '"></div>' +
      '</div>';
    });
    html += '</div>';
  }
  html += '</div>';

  // Imágenes extras (a 40% del tamaño principal) si hay más de 2
  if (o.imgs && o.imgs.length > 1) {
    html += '<div class="fila-extras">';
    for (var i = 1; i < o.imgs.length; i++) {
      html += '<img src="imagenes/' + o.imgs[i] + '" alt="' + o.titulo + '">';
    }
    html += '</div>';
  }

  html += '</div>'; // cierre fila-texto-col

  html += '</div>';
  return html;
}

// ---- Expo item en fila (portafolio) ----
function expoFilaHTML(e) {
  var html = '<div class="fila-item">';

  // Col 1 — Imagen principal
  html += '<div class="fila-media">';
  if (e.imgs && e.imgs.length) {
    html += '<img src="imagenes/' + e.imgs[0] + '" alt="' + e.titulo + '">';
  }
  html += '</div>';

  // Col 2 — Textos + imágenes extras
  html += '<div class="fila-texto-col">';

  html += '<div class="fila-texto">';
  html += '<div class="expo-encabezado">';
  html += '<div class="expo-titulo">' + e.titulo + '</div>';
  html += '<div class="expo-complemento">' + e.complemento_titulo + '</div>';
  if (e.lugar) {
    html += '<div class="expo-lugar">' + e.lugar + '</div>';
  }
  html += '<div class="expo-año">' + e.año + '</div>';
  html += '</div>';

  var desc = e.descripcion;
  if (desc.indexOf('\n\n') > -1) {
    var parrafos = desc.split('\n\n');
    parrafos.forEach(function(p) {
      html += '<div class="expo-descripcion">' + p + '</div>';
    });
  } else {
    html += '<div class="expo-descripcion">' + desc + '</div>';
  }

  if (e.links && e.links.length) {
    html += '<div class="expo-links">';
    e.links.forEach(function(l) {
      html += '<a href="' + l.url + '" target="_blank">' + l.label + '</a>';
    });
    html += '</div>';
  }
  html += '</div>';

  // Imágenes extras (a 40% del tamaño principal) si hay más de 2
  if (e.imgs && e.imgs.length > 1) {
    html += '<div class="fila-extras">';
    for (var i = 1; i < e.imgs.length; i++) {
      html += '<img src="imagenes/' + e.imgs[i] + '" alt="' + e.titulo + '">';
    }
    html += '</div>';
  }

  html += '</div>'; // cierre fila-texto-col

  html += '</div>';
  return html;
}

// ---- Slug para clases ----
function slugify(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

// ---- Obra de arte (página arte) ----
function obraHTML(o) {
  var html = '<div class="obra obra-' + slugify(o.titulo) + '">';

  // Bloque 1 — Encabezado
  html += '<div class="obra-encabezado">';
  html += '<div class="obra-titulo">' + o.titulo + '</div>';
  html += '<div class="obra-complemento">' + o.complemento_titulo + '</div>';
  if (o.exposicion) {
    html += '<div class="obra-exposicion">Exposición: ' + o.exposicion + '</div>';
  }
  html += '<div class="obra-año">' + o.año + '</div>';
  html += '</div>';

  // Bloque 2 — Multimedia
  if (o.imgs && o.imgs.length) {
    html += '<div class="obra-multimedia">';
    if (o.imgs.length === 1) {
      html += '<img src="imagenes/' + o.imgs[0] + '" alt="' + o.titulo + '">';
    } else {
      html += '<div class="obra-grid">';
      o.imgs.forEach(function(img) {
        html += '<img src="imagenes/' + img + '" alt="' + o.titulo + '">';
      });
      html += '</div>';
    }
    html += '</div>';
  }

  // Bloque 3 — Descripción
  if (o.descripcion && o.descripcion.length) {
    html += '<div class="obra-descripcion">' + o.descripcion + '</div>';
  }
  if (o.descripcion_extras) {
    o.descripcion_extras.forEach(function(ex) {
      html += '<p class="obra-extra">' + ex + '</p>';
    });
  }

  // Bloque 3b — Partes (imagen derecha, texto izquierda)
  if (o.partes && o.partes.length) {
    html += '<div class="obra-partes">';
    o.partes.forEach(function(p) {
      html += '<div class="obra-parte obra-parte-' + slugify(p.titulo) + '">' +
        '<div class="obra-parte-texto"><strong>' + p.titulo + ':</strong> ' + p.texto + '</div>' +
        '<div class="obra-parte-img"><img src="imagenes/' + p.imagen + '" alt="' + p.titulo + '"></div>' +
      '</div>';
    });
    html += '</div>';
  }

  // Bloque 4 — Links
  if (o.links && o.links.length) {
    html += '<div class="obra-links">';
    o.links.forEach(function(l) {
      html += '<a href="' + l.url + '" target="_blank">' + l.label + '</a>';
    });
    html += '</div>';
  }

  html += '</div>';
  return html;
}

// ---- Expo item (página expo) ----
function expoItemHTML(e) {
  var html = '<div class="expo">';

  // Bloque 1 — Encabezado
  html += '<div class="expo-encabezado">';
  html += '<div class="expo-titulo">' + e.titulo + '</div>';
  html += '<div class="expo-complemento">' + e.complemento_titulo + '</div>';
  if (e.lugar) {
    html += '<div class="expo-lugar">' + e.lugar + '</div>';
  }
  html += '<div class="expo-año">' + e.año + '</div>';
  html += '</div>';

  // Bloque 2 — Multimedia
  if (e.imgs && e.imgs.length) {
    html += '<div class="expo-multimedia">';
    if (e.imgs.length === 1) {
      html += '<img src="imagenes/' + e.imgs[0] + '" alt="' + e.titulo + '">';
    } else {
      html += '<div class="expo-grid">';
      e.imgs.forEach(function(img) {
        html += '<img src="imagenes/' + img + '" alt="' + e.titulo + '">';
      });
      html += '</div>';
    }
    html += '</div>';
  }

  // Bloque 3 — Descripción
  var desc = e.descripcion;
  if (desc.indexOf('\n\n') > -1) {
    var parrafos = desc.split('\n\n');
    parrafos.forEach(function(p) {
      html += '<div class="expo-descripcion">' + p + '</div>';
    });
  } else {
    html += '<div class="expo-descripcion">' + desc + '</div>';
  }

  // Bloque 4 — Links
  if (e.links && e.links.length) {
    html += '<div class="expo-links">';
    e.links.forEach(function(l) {
      html += '<a href="' + l.url + '" target="_blank">' + l.label + '</a>';
    });
    html += '</div>';
  }

  html += '</div>';
  return html;
}
