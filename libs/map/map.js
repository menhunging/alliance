(async () => {
  let posFixX = null;
  let posFixY = null;

  const topology = await fetch("/libs/map/map.json").then((response) =>
    response.json()
  );

  const data = [
    // ["ru-sc", 10],
    // ["ru-kr", 11],
    // ["ru-2485", 12],
    // ["ru-ar", 13],
    // ["ru-nn", 14],
    // ["ru-yn", 15],
    ["ru-ky", 16],
    ["ru-ck", 17],
    // ["ru-kh", 18],
    // ["ru-sl", 19],
    // ["ru-ka", 20],
    // ["ru-kt", 21],
    // ["ru-ms", 22],
    // ["ru-rz", 23],
    // ["ru-sa", 24],
    // ["ru-ul", 25],
    // ["ru-om", 26],
    // ["ru-ns", 27],
    // ["ru-mm", 28],
    // ["ru-ln", 29],
    // ["ru-sp", 30],
    // ["ru-ki", 31],
    // ["ru-kc", 32],
    // ["ru-in", 33],
    // ["ru-kb", 34],
    // ["ru-no", 35],
    // ["ru-st", 36],
    // ["ru-sm", 37],
    // ["ru-ps", 38],
    // ["ru-tv", 39],
    // ["ru-vo", 40],
    // ["ru-iv", 41],
    // ["ru-ys", 42],
    // ["ru-kg", 43],
    // ["ru-br", 44],
    // ["ru-ks", 45],
    // ["ru-lp", 46],
    // ["ru-2509", 47],
    // ["ru-ol", 48],
    // ["ru-nz", 49],
    // ["ru-pz", 50],
    // ["ru-vl", 51],
    // ["ru-vr", 52],
    // ["ru-ko", 53],
    // ["ru-sv", 54],
    // ["ru-bk", 55],
    // ["ru-ud", 56],
    // ["ru-mr", 57],
    // ["ru-cv", 58],
    // ["ru-cl", 59],
    // ["ru-ob", 60],
    // ["ru-sr", 61],
    // ["ru-tt", 62],
    // ["ru-to", 63],
    // ["ru-ty", 64],
    // ["ru-ga", 65],
    // ["ru-kk", 66],
    // ["ru-cn", 67],
    // ["ru-kl", 68],
    // ["ru-da", 69],
    // ["ru-ro", 70],
    // ["ru-bl", 71],
    // ["ru-tu", 72],
    // ["ru-ir", 73],
    // ["ru-ct", 74],
    // ["ru-yv", 75],
    // ["ru-am", 76],
    // ["ru-tb", 77],
    // ["ru-tl", 78],
    // ["ru-ng", 79],
    // ["ru-vg", 80],
    // ["ru-kv", 81],
    // ["ru-me", 82],
    // ["ru-ke", 83],
    // ["ru-as", 84],
    // ["ru-pr", 85],
    // ["ru-mg", 86],
    // ["ru-bu", 87],
    // ["ru-kn", 88],
    // ["ru-kd", 89],
    // ["ru-ku", 90],
    // ["ru-al", 91],
    // ["ru-km", 92],
    // ["ru-pe", 93],
    // ["ru-ad", 94],
  ];

  // Create the chart
  Highcharts.mapChart("container", {
    chart: {
      map: topology,
    },

    title: {
      text: "", // убираем текст
    },

    exporting: {
      enabled: false, // убираем burger сверху
    },

    credits: {
      enabled: false, // убираем текст снизу
    },

    colorAxis: {
      visible: false, // убираем строку с цветом
    },

    tooltip: {
      enabled: true,
      useHTML: true,
      style: {
        pointerEvents: "auto",
        display: "none", // Скрыть tooltip
      },

      formatter: function () {
        posFixX = this.point.plotX;
        posFixY = this.point.plotY;

        console.log(this.point.value);

        return `<div class="tolltip">
            <span class="tolltip__title">Все проекты в ${this.point.name}</span> 
            <ul class="tolltip__list">
              <li><a href="#" class="links" id="ru-ck">Концессия "Цифровые Недра"</a></li>
              <li><a href="#" class="links" id="ru-ky">Концессия "ЛРТ Подмосковья"</a></li>
              <li><a>Концессия "Московский авиационный узел"</a></li>
              <li><a>Ивестиционная модель перевозчика  для "ВСМ"</a></li>
              <li><a>Концессия "ВСЖМ-1"</a></li>
              <li><a>Транспортно-логистический M&A</a></li>

              <li><a>Концессия "Цифровые Недра"</a></li>
              <li><a>Концессия "ЛРТ Подмосковья"</a></li>
              <li><a>Концессия "Московский авиационный узел"</a></li>
              <li><a>Ивестиционная модель перевозчика  для "ВСМ"</a></li>
              <li><a>Концессия "ВСЖМ-1"</a></li>
              <li><a>Транспортно-логистический M&A</a></li>

              <li><a>Концессия "Цифровые Недра"</a></li>
              <li><a>Концессия "ЛРТ Подмосковья"</a></li>
              <li><a>Концессия "Московский авиационный узел"</a></li>
              <li><a>Ивестиционная модель перевозчика  для "ВСМ"</a></li>
              <li><a>Концессия "ВСЖМ-1"</a></li>
              <li><a>Транспортно-логистический M&A</a></li>
            </ul>
          </div>
          
          
          
          `;
      },
      positioner: function (labelWidth, labelHeight, point) {
        return {
          x: posFixX,
          y: posFixY,
        };
      },
    },

    series: [
      {
        data: data,
        dataLabels: {
          enabled: true,
          useHTML: true,
          formatter: function () {
            if (this.point.value) {
              return `<div class="map-icon">
              <span class="map-icon__count"></span>
            </div>`;
            }
          },
        },

        events: {
          mouseOver: function () {
            this.chart.update({
              tooltip: {
                enabled: false,
              },
            });
          },

          mouseOut: function () {
            this.chart.update({
              tooltip: {
                enabled: false,
              },
            });
          },

          click: function (e) {
            const key = Object.entries(this.chart.hoverPoint.options);
            // console.log(key[0][0]);

            this.chart.update({
              tooltip: {
                enabled: true,
              },
            });

            $(".links").on("click", function () {
              let id = $(this).attr("id");
              id = `popup-${id}`;
              console.log(id);

              MicroModal.show(id);
            });

            // console.log(this.chart.hoverPoint.name);

            // this.selectedCountry = this.chart.hoverPoint.name;
            // this.selectedValue = this.chart.hoverPoint.value;
            // console.log(this.chart);
            // var x = a.checkCountry.length;
            // if (x > 0) {
            //   a.clone[0].remove();
            //   a.clone.splice(0, 1);
            //   a.checkCountry.splice(0, 1);
            // }
            // var cloneToolTip = this.chart.tooltip.label.element.cloneNode(true);
            // this.chart.container.firstChild.appendChild(cloneToolTip);
            // a.checkCountry.push(this.selectedCountry);
            // a.clone.push(cloneToolTip);
            // /*Action goes here*/
          },

          update: function () {
            // console.log("update");
          },
        },
      },
    ],
  });
})();
