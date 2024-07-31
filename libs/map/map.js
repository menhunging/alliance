const initMap = async () => {
  let posFixX = null;
  let posFixY = null;

  const projects = [
    {
      // name: "ru-ms", // Москва
      name: "ru-2509", // Москва
      links: [
        {
          id: "ms-1",
          link: `Концессия "Цифровые Недра"`,
        },
        {
          id: "ms-2",
          link: `Концессия "ЛРТ Подмосковья"`,
        },
        {
          id: "ms-3",
          link: `Концессия "Московский авиационный узел"`,
        },
        {
          id: "ms-5",
          link: `Концессия "ВСЖМ-1"`,
        },
        {
          id: "ms-9",
          link: `Проектное финансирование РЖД-Сити`,
        },
        {
          id: "ms-10",
          link: `Eurasian Rail Alliance Index`,
        },
        {
          id: "ms-12",
          link: `Концессия "Платон"`,
        },
        {
          id: "ms-13",
          link: `Концессия "Ледокол"`,
        },
      ],
      filters: [
        "экология",
        "проектное финансирование",
        "порты, морской и речной транспорт",
        "железные дороги",
        "промышленность",
        "энергетика и ТЭК",
        "РЖД",
        "сибирский деловой союз",
        "концессии",
        "авиация и аэропорты",
        "правительство РФ",
        "международный аэропорт Шереметьево",
        "аэропорт Домодедово",
        "аэропорт Внуково",
        "скоростные магистрали",
        "проектное финансирование",
        "логистика",
        "РЖД Логистика",
        "трансконтейнер",
        "ОТЛК ЕРА",
        "ГТЛК",
        "investment",
        "finance",
        "M&A",
        "research",
        "девеломпент и строительство",
        "РЖД-Недвижимость",
        "национальные структуры",
        "автодороги",
        "информационные технологии",
        "росавтодор",
        "РТ-ИТС",
        "ростех",
      ],

      visible: true,
    },
    {
      name: "ru-ln", // Ленинградская область
      links: [
        {
          id: "ln-1",
          link: `Концессия "Аэродром Левашово"`,
        },
        {
          id: "ln-2",
          link: `Инвестиционные сделки для Газпрома`,
        },
        {
          id: "ln-4",
          link: `Концессия "ВСЖМ-1"`,
        },
        {
          id: "ln-5",
          link: `Концессия "Северо-Восточный ж/д обход СПБ"`,
        },
      ],
      filters: [
        "авиация и аэропорты",
        "проектное финансирование",
        "концессии",
        "железные дороги",
        "энергетика и ТЭК",
        "сибантрацит",
        "РЖД",
        "скоростные магистрали",
        "правительство РФ",
        "Investment",
      ],
      visible: true,
    },
    {
      name: "ru-bu", // Республика Бурятия
      links: [
        {
          id: "bu-1",
          link: `Концессия "Северомуйский тоннель-2"`,
        },
      ],
      filters: ["железные дороги"],
      visible: true,
    },
    {
      name: "ru-sl", // Сахалинская область
      links: [
        {
          id: "sl-1",
          link: `Концессия "Мост на Сахалин"`,
        },
      ],
      filters: ["железные дороги"],
      visible: true,
    },
    {
      name: "ru-kh", // Хабаровский край
      links: [
        {
          id: "kh-1",
          link: `M&A порта "Ванино"`,
        },
      ],
      filters: [
        "железные дороги",
        "порты, морской и речной транспорт",
        "энергетика и ТЭК",
        "РЖД",
        "мечел",
      ],
      visible: true,
    },
    {
      name: "ru-pr", // Приморский край
      links: [
        {
          id: "pr-1",
          link: `Проектное финансирование Порта "Суходол"`,
        },
        {
          id: "pr-2",
          link: `M&A аэропорта "Кневичи"`,
        },
      ],
      filters: [
        "проектное финансирование",
        "порты, морской и речной транспорт",
        "железные дороги",
        "промышленность",
        "энергетика и ТЭК",
        "РЖД",
        "сибирский деловой союз",
      ],
      visible: true,
    },
    {
      name: "ru-kd", // Краснодарский край
      links: [
        {
          id: "kd-1",
          link: `Концессия "Порт "Тамань"`,
        },
      ],
      filters: [
        "авиация и аэропорты",
        "базэл Аэро",
        "концессии",
        "порты, морской и речной транспорт",
        "РЖД",
        "pосморпорт",
      ],
      visible: true,
    },
    {
      name: "ru-yn", // Ямало-Ненецкий АО
      links: [
        {
          id: "yn-1",
          link: `Концессия "СШХ-2"`,
        },
        {
          id: "yn-2",
          link: `Концессия "СШХ"`,
        },
      ],
      filters: [
        "проектное финансирование",
        "концессии",
        "железные дороги",
        "промышленность",
        "энергетика и ТЭК",
        "РЖД",
        "газпром",
        "газпромтранс",
        "правительство ЯНАО",
      ],
      visible: true,
    },
    {
      name: "ru-ko", // Республика Коми
      links: [
        {
          id: "ko-1",
          link: `Концессия "СШХ"`,
        },
      ],
      filters: [
        "проектное финансирование",
        "концессии",
        "железные дороги",
        "промышленность",
        "энергетика и ТЭК",
        "РЖД",
        "газпром",
        "газпромтранс",
        "правительство ЯНАО",
      ],
      visible: true,
    },
    {
      name: "ru-ns", // Новосибирская область
      links: [
        {
          id: "ns-1",
          link: `Концессия «IV мост Новосибирска»`,
        },
        {
          id: "ns-2",
          link: `ГЧП-проект "Сеть поликлиник"`,
        },
      ],
      filters: [
        "Железные дороги",
        "логистика",
        "РЖД Логистика",
        "Трансконтейнер",
        "ОТЛК ЕРА",
        "ГЧП",
        "Социальная инфраструктура и здравоохранение",
        "Правительсво Новосибирской области",
      ],
      visible: true,
    },
    {
      name: "ru-mm", // Мурманская область
      links: [
        {
          id: "mm-1",
          link: `Концессия "Порт "Лавна"`,
        },
      ],
      filters: [
        "Проектное финансирование",
        "Концессии",
        "Порты, морской и речной транспорт",
        "Железные дороги",
        "ГТЛК",
        "РЖД",
        "Газпром Банк",
        "Центр развития портовой инфраструктуры",
      ],
      visible: true,
    },
    {
      name: "ru-am", // Амурская область
      links: [
        {
          id: "am-1",
          link: `Концессия "Эльга–Улак"`,
        },
      ],
      filters: [
        "Проектное финансирование",
        "Концессии",
        "Железные дороги",
        "Энергетика и ТЭК",
        "Промышленность ",
        "РЖД",
        "А-Проперти",
      ],
      visible: true,
    },
    {
      name: "ru-tu", // Республика Тыва
      links: [
        {
          id: "tu-1",
          link: `Концессия "Кызыл–Курагино"`,
        },
      ],
      filters: [
        "концессии",
        "энергетика и ТЭК",
        "железные дороги",
        "РЖД",
        "ТЭПК",
      ],
      visible: true,
    },
  ];

  const topology = await fetch("./libs/map/map.json").then((response) =>
    response.json()
  );

  const data = [
    // ["ru-ms", 12], // Москва
    ["ru-2509", 8], // Московская область
    ["ru-ln", 4], // Ленинградская область
    ["ru-bu", 1], // Республика Бурятия
    ["ru-sl", 1], // Сахалинская область
    ["ru-kh", 1], // Хабаровский край
    ["ru-pr", 2], // Приморский край
    ["ru-kd", 1], // Краснодарский край
    ["ru-yn", 2], // Ямало-Ненецкий АО
    ["ru-ko", 1], // Республика Коми
    ["ru-ns", 2], // Новосибирская область
    ["ru-mm", 1], // Мурманская область
    ["ru-am", 1], // Амурская область
    ["ru-tu", 1], // Республика Тыва

    // ["ru-sc", 1],
    // ["ru-kr", 2],
    // ["ru-2485", 3],
    // ["ru-ar", 4],
    // ["ru-nn", 5],
    // ["ru-ky", 7],
    // ["ru-ck", 2],
    // ["ru-ka", 11],
    // ["ru-kt", 12],
    // ["ru-rz", 14],
    // ["ru-sa", 15],
    // ["ru-ul", 16],
    // ["ru-om", 17],
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
    // ["ru-ol", 39],
    // ["ru-nz", 40],
    // ["ru-pz", 41],
    // ["ru-vl", 42],
    // ["ru-vr", 43],
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
    // ["ru-ir", 73],
    // ["ru-ct", 74],
    // ["ru-yv", 75],
    // ["ru-tb", 77],
    // ["ru-tl", 78],
    // ["ru-ng", 79],
    // ["ru-vg", 80],
    // ["ru-kv", 81],
    // ["ru-me", 82],
    // ["ru-ke", 83],
    // ["ru-as", 84],
    // ["ru-mg", 86],
    // ["ru-kn", 88],
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
      events: {
        load: function () {
          // this.mapZoom(0.7);
        },
      },
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
        let self = this.point;
        let region = self["hc-key"];
        let objTemp = [];
        let html = "";

        posFixX = this.point.plotX;
        posFixY = this.point.plotY;

        projects.map(function (item) {
          if (region === item.name) {
            objTemp = [...item.links];
          }
        });

        objTemp.map((item) => {
          html =
            html +
            `<li><span class="links ${region}" id="${item.id}">${item.link}</span></li>`;
        });

        return `<div class="tolltip-wrap"><div class="tolltip">
            <span class="tolltip__title">Проекты в ${self.name}</span>
            <ul class="tolltip__list">
            ${html}
            </ul>
        </div><div>`;
      },
      positioner: function () {
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
            let region = this.point["hc-key"];
            let objTemp = [];
            let visible = true;
            let pos = this.point["hc-key"].indexOf("-");
            let uniqueClass = this.point["hc-key"].slice(pos + 1);

            let filters = [];

            if (filterType1 !== "" && filterType2 !== "") {
              setFilterMap(filterType1, filterType2);
            }

            if (filterType1 !== "" && filterType2 === "") {
              setFilterMap(filterType1);
            }

            if (filterType1 === "" && filterType2 !== "") {
              setFilterMap(filterType2);
            }

            if (this.point.value) {
              let htmlCount = `<span class="map-icon__count hidden"></span>`;

              if (this.point.value >= 2) {
                htmlCount = `<span class="map-icon__count">
                <span>${this.point.value}</span>
              </span>`;
              }

              switch (this.point["hc-key"]) {
                case "ru-2509":
                  return `<div class="map-icon map-icon--capital ${uniqueClass} ${
                    visible && "visible"
                  }">${htmlCount}`;
                case "ru-ln":
                  return `<div class="map-icon map-icon--piter ${uniqueClass} ${
                    visible && "visible"
                  }">${htmlCount}`;
                case "ru-kd":
                  return `<div class="map-icon map-icon--regionIsPoint ${uniqueClass} ${
                    visible && "visible"
                  }">${htmlCount}`;
                case "ru-sl":
                  return `<div class="map-icon map-icon--regionIsPoint ${uniqueClass} ${
                    visible && "visible"
                  }">${htmlCount}`;
                case "ru-ns":
                  return `<div class="map-icon map-icon--regionIsPoint ${uniqueClass} ${
                    visible && "visible"
                  }">${htmlCount}`;
                case "ru-yn":
                  return `<div class="map-icon map-icon--regionIsPoint ${uniqueClass} ${
                    visible && "visible"
                  }">${htmlCount}`;
                case "ru-ko":
                  return `<div class="map-icon map-icon--regionIsPoint ${uniqueClass} ${
                    visible && "visible"
                  }">${htmlCount}`;
                case "ru-tu":
                  return `<div class="map-icon map-icon--regionIsPoint ${uniqueClass} ${
                    visible && "visible"
                  }">${htmlCount}`;
                case "ru-mm":
                  return `<div class="map-icon map-icon--regionIsPoint ${uniqueClass} ${
                    visible && "visible"
                  }">${htmlCount}`;
                case "ru-pr":
                  return `<div class="map-icon map-icon--regionIsPoint map-icon--primorskiy ${uniqueClass} ${
                    visible && "visible"
                  }">${htmlCount}`;

                default:
                  return `<div class="map-icon ${uniqueClass} ${
                    visible && "visible"
                  }">${htmlCount}</div>`;
              }
            }

            function setFilterMap(type, anotherType = false) {
              projects.map(function (item) {
                if (region === item.name) {
                  filters = [...item.filters];

                  if (!anotherType) {
                    if (filters.includes(type)) {
                      item.visible = true;
                    } else {
                      item.visible = false;
                    }
                  } else {
                    if (
                      filters.includes(type) &&
                      filters.includes(anotherType)
                    ) {
                      item.visible = true;
                    } else {
                      item.visible = false;
                    }
                  }

                  visible = item.visible;
                }
              });
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
            let self = this;
            $(document).mouseup(function (e) {
              if (
                !$(".tolltip").is(e.target) &&
                $(".tolltip").has(e.target).length === 0
              ) {
                self.chart.update({
                  tooltip: {
                    enabled: false,
                  },
                });

                $(document).off("mouseup");
              }
            });

            this.chart.update({
              tooltip: {
                enabled: true,
              },
            });

            $(".links").on("click", function () {
              let id = $(this).attr("id");
              let region = $(this).attr("class");
              region = region.replace("links ", "");

              id = `popup-${id}`;

              if ($("#" + region).length > 0) {
                MicroModal.show(region);

                let pos = $(`[data-id='${id}']`).index();

                mySwipers.map(function (item, index) {
                  if (item.self === region) {
                    mySwipers[index].slideTo(pos);
                  }
                })[0];

                $("body").addClass("hidden");

                $(".modal__overlay").on("click", function (event) {
                  event.preventDefault();
                  MicroModal.close(region);
                  $("body").removeClass("hidden");
                });

                $(".modal__close").on("click", function (event) {
                  event.preventDefault();
                  MicroModal.close(region);
                  $("body").removeClass("hidden");
                });
              }
            });
          },
        },
      },
    ],
  });
};
