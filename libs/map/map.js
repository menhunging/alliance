(async () => {
  let posFixX = null;
  let posFixY = null;

  let testData = 123; // только число

  const topology = await fetch("../libs/map/map.json").then((response) =>
    response.json()
  );

  const data = [
    // ["ru-sc", 1],
    // ["ru-kr", 2],
    // ["ru-2485", 3],
    // ["ru-ar", 4],
    // ["ru-nn", 5],
    // ["ru-yn", 6],
    ["ru-ky", 7],
    ["ru-ck", 2],
    // ["ru-kh", 9],
    // ["ru-sl", 10],
    // ["ru-ka", 11],
    // ["ru-kt", 12],
    // ["ru-ms", 13],
    // ["ru-rz", 14],
    // ["ru-sa", 15],
    // ["ru-ul", 16],
    // ["ru-om", 17],
    // ["ru-ns", 18],
    // ["ru-mm", 19],
    // ["ru-ln", 20],
    // ["ru-sp", 21],
    // ["ru-ki", 22],
    // ["ru-kc", 23],
    // ["ru-in", 24],
    // ["ru-kb", 25],
    // ["ru-no", 26],
    // ["ru-st", 27],
    // ["ru-sm", 28],
    // ["ru-ps", 29],
    // ["ru-tv", 30],
    // ["ru-vo", 31],
    // ["ru-iv", 32],
    // ["ru-ys", 33],
    // ["ru-kg", 34],
    // ["ru-br", 35],
    // ["ru-ks", 36],
    // ["ru-lp", 37],
    // ["ru-2509", 38],
    // ["ru-ol", 39],
    // ["ru-nz", 40],
    // ["ru-pz", 41],
    // ["ru-vl", 42],
    // ["ru-vr", 43],
    // ["ru-ko", 44],
    // ["ru-sv", 45],
    // ["ru-bk", 46],
    // ["ru-ud", 47],
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
              <li><span class="links" id="ru-ck">Концессия "Цифровые Недра"</span></li>
              <li><span class="links" id="ru-ky">Концессия "ЛРТ Подмосковья"</span></li>
              <li><span class="links">Концессия "Московский авиационный узел"</span></li>
              <li><span class="links">Ивестиционная модель перевозчика  для "ВСМ"</span></li>
              <li><span class="links">Концессия "ВСЖМ-1"</span></li>
              <li><span class="links">Транспортно-логистический M&A</span></li>

              <li><span class="links">Концессия "Цифровые Недра"</span></li>
              <li><span class="links">Концессия "ЛРТ Подмосковья"</span></li>
              <li><span class="links">Концессия "Московский авиационный узел"</span></li>
              <li><span class="links">Ивестиционная модель перевозчика  для "ВСМ"</span></li>
              <li><span class="links">Концессия "ВСЖМ-1"</span></li>
              <li><span class="links">Транспортно-логистический M&A</span></li>

              <li><span class="links">Концессия "Цифровые Недра"</span></li>
              <li><span class="links">Концессия "ЛРТ Подмосковья"</span></li>
              <li><span class="links">Концессия "Московский авиационный узел"</span></li>
              <li><span class="links">Ивестиционная модель перевозчика  для "ВСМ"</span></li>
              <li><span class="links">Концессия "ВСЖМ-1"</span></li>
              <li><span class="links">Транспортно-логистический M&A</span></li>
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
              <span class="map-icon__count"><span>${this.point.value}</span></span>
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
