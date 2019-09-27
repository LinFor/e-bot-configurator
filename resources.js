export let resources = {
    "options": [
        {
            id: "option-body",
            caption: "Рама",
            variants: [
                {
                    id: "option-body-300x300-v1-01",
                    caption: "Базовая 300x300"
                }
            ],
        },
        {
            id: "option-corners",
            caption: "Тип уголков",
            variants: [
                {
                    id: "option-corners-plastic-2020",
                    caption: "Пластиковые 20x20 (печатные)"
                },
                {
                    id: "option-corners-plastic-2040",
                    caption: "Пластиковые 20x40 (печатные)"
                },
                {
                    id: "option-corners-metal-2020",
                    caption: "Металлические 20x20"
                },
                {
                    id: "option-corners-metal-2040",
                    caption: "Металлические 20x40"
                }
            ]
        },
        {
            id: "option-pulleys",
            caption: "Шкивы привода осей X/Y",
            variants: [
                {
                    id: "option-pulleys-16T",
                    caption: "Шкивы GT2-16"
                },
                {
                    id: "option-pulleys-20T",
                    caption: "Шкивы GT2-20"
                },
            ]

        },
        {
            id: "option-enforce-motors-with-bearings",
            caption: "Усилить валы моторов подшипниками",
        },
        {
            id: "option-profile-nuts",
            caption: "Предпочтительный тип гаек для печатных деталей",
            variants: [
                {
                    id: "option-profile-nuts-square",
                    caption: "Квадратные гайки DIN562"
                },
                {
                    id: "option-profile-nuts-t-nuts",
                    caption: "Поворотные Т-гайки"
                }
            ]
        },
        {
            id: "option-profile-thread",
            caption: "Торцевая резьба профиля",
            variants: [
                {
                    id: "option-profile-thread-M6",
                    caption: "M6 (отверстия в профиле Ø > 4.2мм)"
                },
                {
                    id: "option-profile-thread-M5",
                    caption: "M5 (отверстия в профиле Ø ≤ 4.2мм)"
                }
            ]
        },
        {
            id: "option-zaxis-motion-type",
            caption: "Тип привода оси Z",
            variants: [
                {
                    id: "option-zaxis-motion-type-leadscrew-t8-2",
                    caption: "Ходовой винт T8-2"
                },
                {
                    id: "option-zaxis-motion-type-leadscrew-t12-2",
                    caption: "Ходовой винт T12-2"
                },
                {
                    id: "option-zaxis-motion-type-threadrod-m12",
                    caption: "Шпилька M12"
                },
                {
                    id: "option-zaxis-motion-type-ballscrew-sfu1204-end-machined",
                    caption: "Шарико-винтовая передача SFU1204 (обработанный вал)"
                },
                {
                    id: "option-zaxis-motion-type-ballscrew-sfu1204-non-machined",
                    caption: "Шарико-винтовая передача SFU1204 (необработанный вал)"
                },
            ]
        },
        {
            id: "option-casing",
            caption: "Обшивка",
        },
        {
            id: "option-2020-x-profile",
            caption: "Альтернативный профиль оси Х (2020)",
        },
        {
            id: "option-use-front-profile-for-bed-plate",
            caption: "Дополнительный (передний) профиль стола",
        },
    ],
    "variables": [
        {
            id: "base-frame",
            variants: [
                {
                    if: "option-body-300x300-v1-01",
                    require: [
                        "profile-A1",
                        "profile-A2",
                        "profile-A3",
                        "profile-A4",
                        "profile-B1",
                        "profile-B2",
                        "profile-C1",
                        "profile-D1",
                        "profile-D2",
                        "profile-E1",
                        "profile-F1",
                        "profile-F2",
                        "profile-F3",
                        "axis-X-assembly",
                        "axis-Y-assembly",
                        "axis-Z-assembly",
                        "profile-I1I2",
                    ]
                }
            ]
        },
        {
            id: "profile-A1",
            caption: "Стойка A1",
            require: [
                {id: "profile-v-slot-2040-520mm", count: 1},
                {id: "profile-tore-screw", count: 2},
                {id: "profile-corner-strong", count: 2},
                "top-front-left-corner",
                "bottom-corner-plate-left"
            ]
        },
        {
            id: "profile-A2",
            caption: "Стойка A2",
            require: [
                {id: "profile-v-slot-2040-520mm", count: 1},
                {id: "profile-tore-screw", count: 2},
                {id: "profile-corner-strong", count: 2},
                "top-rear-left-corner",
                "bottom-corner-plate-right"
            ]
        },
        {
            id: "profile-A3",
            caption: "Стойка A3",
            require: [
                {id: "profile-v-slot-2040-520mm", count: 1},
                {id: "profile-tore-screw", count: 2},
                {id: "profile-corner-strong", count: 2},
                "top-rear-right-corner",
                "bottom-corner-plate-left"
            ]
        },
        {
            id: "profile-A4",
            caption: "Стойка A4",
            require: [
                {id: "profile-v-slot-2040-520mm", count: 1},
                {id: "profile-tore-screw", count: 2},
                {id: "profile-corner-strong", count: 2},
                "top-front-right-corner",
                "bottom-corner-plate-right"
            ]
        },
        {
            id: "profile-B1",
            caption: "Продольный профиль B1",
            require: [
                {id: "profile-v-slot-2040-490mm", count: 1},
                {id: "profile-tore-screw", count: 2}
            ]
        },
        {
            id: "profile-B2",
            caption: "Продольный профиль B2",
            require: [
                {id: "profile-v-slot-2040-490mm", count: 1},
                {id: "profile-tore-screw", count: 2}
            ]
        },
        {
            id: "profile-C1",
            caption: "Поперечный профиль C1",
            require: {id: "profile-v-slot-2040-460mm", count: 1}
        },
        {
            id: "profile-D1",
            caption: "Продольный профиль D1",
            require: [
                "profile-v-slot-2020-470mm",
                {id: "profile-corner-strong", count: 2}
            ]
        },
        {
            id: "profile-D2",
            caption: "Продольный профиль D2",
            require: [
                "profile-v-slot-2020-470mm",
                {id: "profile-corner-strong", count: 2}
            ]
        },
        {
            id: "profile-E1",
            caption: "Нижний профиль E1",
            require: [
                "profile-v-slot-2020-500mm",
                {id: "bottom-corner-plate", count: 2},
                {id: "profile-corner-strong", count: 4}
            ]
        },
        {
            id: "profile-F1",
            caption: "Нижний профиль F1",
            require: [
                "profile-v-slot-2020-460mm",
                {id: "profile-corner-strong", count: 2}
            ]
        },
        {
            id: "profile-F2",
            caption: "Нижний профиль F2",
            require: [
                "profile-v-slot-2020-460mm",
                {id: "profile-corner-strong", count: 2}
            ]
        },
        {
            id: "profile-F3",
            caption: "Поперечный профиль F3",
            require: [
                "profile-v-slot-2020-460mm",
                {id: "profile-corner-regular", count: 2}
            ]
        },
        {
            id: "profile-G1",
            caption: "Профиль стола G1",
            require: "profile-v-slot-2020-440mm"
        },
        {
            id: "profile-G2",
            caption: "Профиль стола G2",
            require: "profile-v-slot-2020-440mm"
        },
        {
            id: "profile-H1",
            caption: "Профиль стола H1",
            require: "profile-v-slot-2020-260mm"
        },
        {
            id: "profile-H2",
            caption: "Профиль стола H2",
            require: [
                "profile-v-slot-2020-260mm",
                {id:"profile-corner-light", count: 2}
            ]
        },
        {
            id: "profile-I1I2",
            caption: "Профиль оси X I1/I2",
            variants: [
                {
                    if: "option-2020-x-profile",
                    require: {id: "profile-v-slot-2020-480mm", count: 1}
                },
                {
                    require: {id: "profile-v-slot-2040-480mm", count: 1}
                }
            ]
        },
        {
            id: "profile-tore-screw",
            variants: [
                {
                    if: "option-profile-thread-M6",
                    require: {id: "screw-M6x16-DIN912", count: 1}
                },
                {
                    if: "option-profile-thread-M5",
                    require: {id: "screw-M5x16-DIN912", count: 1}
                }
            ]
        },
        {
            id: "profile-corner-strong",
            caption: "Уголок усиленный",
            variants: [
                {
                    if: "option-corners-plastic-2040",
                    require: [
                        {id: "printed-corner-2040", count: 1},
                        {id: "screw-M5x10-DIN912", count: 4},
                        {id: "washer-M5-DIN125", count: 4},
                        {id: "profile-nut-for-plastic-M5", count: 4}
                    ]
                },
                {
                    if: "option-corners-plastic-2020",
                    require: [
                        {id: "printed-corner-2020", count: 1},
                        {id: "screw-M5x10-DIN912", count: 2},
                        {id: "washer-M5-DIN125", count: 2},
                        {id: "profile-nut-for-plastic-M5", count: 2}
                    ]
                },
                {
                    if: "option-corners-metal-2040",
                    require: [
                        {id: "metal-corner-2040", count: 1},
                        {id: "screw-M5x10-DIN912", count: 4},
                        {id: "washer-M5-DIN125", count: 4},
                        {id: "v-slot-t-block-M5", count: 4}
                    ]
                },
                {
                    if: "option-corners-metal-2020",
                    require: [
                        {id: "metal-corner-2020", count: 1},
                        {id: "screw-M5x10-DIN912", count: 2},
                        {id: "washer-M5-DIN125", count: 2},
                        {id: "v-slot-t-block-M5", count: 2}
                    ]
                }
            ]
        },
        {
            id: "profile-corner-regular",
            caption: "Уголок без нагрузки",
            variants: [
                {
                    if: "option-corners-plastic-2040",
                    require: [
                        {id: "printed-corner-2020", count: 1},
                        {id: "screw-M5x10-DIN912", count: 2},
                        {id: "washer-M5-DIN125", count: 2},
                        {id: "profile-nut-for-plastic-M5", count: 2}
                    ]
                },
                {
                    if: "option-corners-plastic-2020",
                    require: [
                        {id: "printed-corner-2020", count: 1},
                        {id: "screw-M5x10-DIN912", count: 2},
                        {id: "washer-M5-DIN125", count: 2},
                        {id: "profile-nut-for-plastic-M5", count: 2}
                    ]
                },
                {
                    if: "option-corners-metal-2040",
                    require: [
                        {id: "metal-corner-2020", count: 1},
                        {id: "screw-M5x10-DIN912", count: 2},
                        {id: "washer-M5-DIN125", count: 2},
                        {id: "v-slot-t-block-M5", count: 2}
                    ]
                },
                {
                    if: "option-corners-metal-2020",
                    require: [
                        {id: "metal-corner-2020", count: 1},
                        {id: "screw-M5x10-DIN912", count: 2},
                        {id: "washer-M5-DIN125", count: 2},
                        {id: "v-slot-t-block-M5", count: 2}
                    ]
                }
            ]
        },
        {
            id: "profile-corner-light",
            caption: "Уголок лёгкий",
            require: [
                {id: "printed-corner-2020", count: 1},
                {id: "screw-M5x10-DIN912", count: 2},
                {id: "washer-M5-DIN125", count: 2},
                {id: "profile-nut-for-plastic-M5", count: 2}
            ]
        },
        {
            id: "printed-front-left-corner",
            caption: "Передний левый угол",
            variants: [
                {
                    if: ["option-pulleys-16T", "option-enforce-motors-with-bearings"],
                    require: ["printed-front-left-corner-16T-bearing", "pulley-GT2-bore-5mm-16T", "bearing-625zz"]
                },
                {
                    if: ["option-pulleys-20T", "option-enforce-motors-with-bearings"],
                    require: ["printed-front-left-corner-20T-bearing", "pulley-GT2-bore-5mm-20T", "bearing-625zz"]
                },
                {
                    if: "option-pulleys-16T",
                    require: ["printed-front-left-corner-16T", "pulley-GT2-bore-5mm-16T"]
                },
                {
                    if: "option-pulleys-20T",
                    require: ["printed-front-left-corner-20T", "pulley-GT2-bore-5mm-20T"]
                }
            ]
        },
        {
            id: "printed-front-right-corner",
            caption: "Передний правый угол",
            variants: [
                {
                    if: ["option-pulleys-16T", "option-enforce-motors-with-bearings"],
                    require: ["printed-front-right-corner-16T-bearing", "pulley-GT2-bore-5mm-16T", "bearing-625zz"]
                },
                {
                    if: ["option-pulleys-20T", "option-enforce-motors-with-bearings"],
                    require: ["printed-front-right-corner-20T-bearing", "pulley-GT2-bore-5mm-20T", "bearing-625zz"]
                },
                {
                    if: "option-pulleys-16T",
                    require: ["printed-front-right-corner-16T", "pulley-GT2-bore-5mm-16T"]
                },
                {
                    if: "option-pulleys-20T",
                    require: ["printed-front-right-corner-20T", "pulley-GT2-bore-5mm-20T"]
                }
            ]
        },
        {
            id: "printed-rear-left-corner",
            caption: "Задний левый угол",
            variants: [
                {
                    if: "option-pulleys-16T",
                    require: "printed-rear-left-corner-16T"
                },
                {
                    if: "option-pulleys-20T",
                    require: "printed-rear-left-corner-20T"
                }
            ]
        },
        {
            id: "printed-rear-right-corner",
            caption: "Задний правый угол",
            variants: [
                {
                    if: "option-pulleys-16T",
                    require: "printed-rear-right-corner-16T"
                },
                {
                    if: "option-pulleys-20T",
                    require: "printed-rear-right-corner-20T"
                }
            ]
        },
        {
            id: "top-front-left-corner",
            caption: "Стык A1-B1-F3",
            require: [
                "printed-front-left-corner",
                {id: "screw-M5x10-DIN912", count: 9},
                {id: "washer-M5-DIN125", count: 5},
                {id: "profile-nut-for-plastic-M5", count: 9},
                {id: "screw-М3х8-DIN912", count: 4},
                {id: "washer-M3-DIN433", count: 4},
                "motor-nema17-hs4401"
            ]
        },
        {
            id: "top-front-right-corner",
            caption: "Стык A4-B2-F3",
            require: [
                "printed-front-right-corner",
                {id: "screw-M5x10-DIN912", count: 9},
                {id: "washer-M5-DIN125", count: 5},
                {id: "profile-nut-for-plastic-M5", count: 9},
                {id: "screw-М3х8-DIN912", count: 4},
                {id: "washer-M3-DIN433", count: 4},
                "motor-nema17-hs4401"
            ]
        },
        {
            id: "top-rear-left-corner",
            caption: "Стык A2-B1-C1",
            require: [
                "printed-rear-left-corner",
                {id: "screw-M5x10-DIN912", count: 14},
                {id: "washer-M5-DIN125", count: 14},
                {id: "profile-nut-for-plastic-M5", count: 14},
                {id: "bearing-f623zz", count: 4},
                {id: "screw-М3х20-DIN912", count: 2},
                {id: "washer-M3-DIN433", count: 2},
                {id: "nut-M3-DIN934", count: 2}
            ]
        },
        {
            id: "top-rear-right-corner",
            caption: "Стык A3-B2-C1",
            require: [
                "printed-rear-right-corner",
                {id: "screw-M5x10-DIN912", count: 14},
                {id: "washer-M5-DIN125", count: 14},
                {id: "profile-nut-for-plastic-M5", count: 14},
                {id: "bearing-f623zz", count: 4},
                {id: "screw-М3х20-DIN912", count: 2},
                {id: "washer-M3-DIN433", count: 2},
                {id: "nut-M3-DIN934", count: 2}
            ]
        },

        {
            id: "bottom-corner-plate-left",
            caption: "Косынка левая",
            require: [
                "printed-corner-plate-3x3-left",
                {id: "screw-M5x10-DIN912", count: 3},
                {id: "washer-M5-DIN125", count: 3},
                {id: "profile-nut-for-plastic-M5", count: 3},
            ]
        },
        {
            id: "bottom-corner-plate-right",
            caption: "Косынка левая",
            require: [
                "printed-corner-plate-3x3-right",
                {id: "screw-M5x10-DIN912", count: 3},
                {id: "washer-M5-DIN125", count: 3},
                {id: "profile-nut-for-plastic-M5", count: 3},
            ]
        },
        {
            id: "bottom-corner-plate",
            caption: "Косынка",
            require: [
                "printed-corner-plate-3x3",
                {id: "screw-M5x10-DIN912", count: 5},
                {id: "washer-M5-DIN125", count: 5},
                {id: "profile-nut-for-plastic-M5", count: 5},
            ]
        },
        {
            id: "axis-X-assembly",
            caption: "Ось X",
            require: [
                "axis-X-guide",
                "axis-X-endstop",
            ]
        },
        {
            id: "axis-X-guide",
            require: [
                "linear-guideway-mgn12-with-caret-h",
                "printed-linear-guideway-mgn12-20mm",
                {id: "screw-М3х8-DIN912", count: 17},
                {id: "v-slot-t-nut-M3", count: 17},
            ]
        },
        {
            id: "axis-X-endstop",
            require: [
                "printed-xaxis-endstop-flag",
                {id: "screw-M5x10-DIN912", count: 1},
                {id: "washer-M5-DIN125", count: 1},
                {id: "profile-nut-for-plastic-M5", count: 1},
                "optical-endstop",
                {id: "screw-М3х10-DIN912", count: 2},
                {id: "washer-M3-DIN433", count: 2},
                {id: "nut-M3-DIN934", count: 2},
            ]
        },
        {
            id: "axis-Y-assembly",
            caption: "Ось Y",
            require: [
                "axis-Y-left-side",
                "axis-Y-right-side",
                "axis-Y-endstop"
            ]
        },
        {
            id: "axis-Y-left-side",
            require: [
                "linear-guideway-mgn12-with-caret-h",
                "printed-linear-guideway-mgn12-20mm",
                "printed-linear-guideway-mgn12-35mm",
                {id: "screw-М3х8-DIN912", count: 19},
                {id: "v-slot-t-nut-M3", count: 19},
                {id: "printed-yaxis-left-caret-16T", if: "option-pulleys-16T"},
                {id: "printed-yaxis-left-caret-20T", if: "option-pulleys-20T"},
                {id: "bearing-f623zz", count: 4},
                {id: "screw-М3х20-DIN912", count: 2},
                {id: "washer-M3-DIN433", count: 2},
                {id: "nut-M3-DIN985", count: 2},
                {id: "screw-M5x10-DIN912", count: 8},
                {id: "screw-M5x10-DIN965", count: 2},
                {id: "washer-M5-DIN125", count: 8},
                {id: "profile-nut-for-plastic-M5", count: 10},
                "printed-yaxis-mount-up-and-down",
                {id: "screw-М3х8-DIN912", count: 4},
                "printed-yaxis-mount-back-side",
                {id: "screw-M5x40-DIN912", count: 4},
                {id: "nut-M5-DIN934", count: 4},
            ]
        },
        {
            id: "axis-Y-right-side",
            require: [
                "linear-guideway-mgn12-with-caret-h",
                "printed-linear-guideway-mgn12-20mm",
                "printed-linear-guideway-mgn12-35mm",
                {id: "screw-М3х8-DIN912", count: 19},
                {id: "v-slot-t-nut-M3", count: 19},
                {id: "printed-yaxis-right-caret-16T", if: "option-pulleys-16T"},
                {id: "printed-yaxis-right-caret-20T", if: "option-pulleys-20T"},
                {id: "bearing-f623zz", count: 4},
                {id: "screw-М3х20-DIN912", count: 2},
                {id: "washer-M3-DIN433", count: 2},
                {id: "nut-M3-DIN985", count: 2},
                {id: "screw-M5x10-DIN912", count: 8},
                {id: "screw-M5x10-DIN965", count: 2},
                {id: "washer-M5-DIN125", count: 8},
                {id: "profile-nut-for-plastic-M5", count: 10},
                "printed-yaxis-mount-up-and-down",
                {id: "screw-М3х8-DIN912", count: 4},
                "printed-yaxis-mount-back-side",
                {id: "screw-M5x40-DIN912", count: 4},
                {id: "nut-M5-DIN934", count: 4},
            ]
        },
        {
            id: "axis-Y-endstop",
            require: [
                "printed-yaxis-endstop-mount",
                {id: "screw-M5x10-DIN912", count: 2},
                {id: "washer-M5-DIN125", count: 2},
                {id: "profile-nut-for-plastic-M5", count: 2},
                "optical-endstop",
                {id: "screw-М3х10-DIN912", count: 2},
                {id: "washer-M3-DIN433", count: 2},
                {id: "nut-M3-DIN934", count: 2},
                "printed-yaxis-endstop-flag",
                "screw-М3х25-DIN912",
                "nut-M3-DIN985",
                "nut-M3-DIN934"
            ]
        },
        {
            id: "axis-Z-assembly",
            caption: "Ось Z",
            require: [
                "axis-Z-bed-frame",
                "axis-Z-heated-bed",
                {id: "axis-Z-single-rod", count: 2},
                "axis-Z-feed-screw",
                "axis-Z-endstops"
            ]
        },
        {
            id: "axis-Z-single-rod",
            caption: "Опорный вал оси Z",
            require: [
                "printed-zaxis-rod-holder-16mm-top",
                "printed-zaxis-rod-holder-16mm-bottom",
                "steel-optical-rod-16mm-500mm",
                {id: "screw-M5x10-DIN912", count: 4},
                {id: "washer-M5-DIN125", count: 4},
                {id: "profile-nut-for-plastic-M5", count: 4},
                {id: "screw-М3х20-DIN912", count: 1},
                {id: "washer-M3-DIN433", count: 1},
                {id: "nut-M3-DIN934", count: 1}
            ]
        },
        {
            id: "axis-Z-bed-frame",
            caption: "Рама стола",
            require: [
                "profile-G1",
                "profile-G2",
                "axis-Z-bed-frame-to-rods-brackets",
                "profile-H1",
                {id: "profile-H2", if: "option-use-front-profile-for-bed-plate"},
            ]
        },
        {
            id: "axis-Z-heated-bed",
            caption: "Нагревательный стол",
            require: [
                "bed-plate-327x327x4mm",
                "bed-plate-glass-327x327mm",
                {id: "screw-М3х40-DIN912", count: 4},
                {id: "washer-M3-DIN433", count: 4},
                {id: "nut-M3-DIN934", count: 4},
                // Крепление стола
                {id: "printed-zaxis-table-mount", count: 4},
                {id: "screw-M5x10-DIN912", count: 8},
                {id: "profile-nut-for-plastic-M5", count: 8},
                // Пружины
                {id: "spring-id4-od5-l16", count: 4},
                {id: "washer-M3-DIN9021", count: 8},
                {id: "nut-M3-DIN934", count: 4},
                {id: "printed-table-tuning-wheel-m3", count: 4},
            ]
        },
        {
            id: "axis-Z-bed-frame-to-rods-brackets",
            require: [
                "printed-zaxis-rod-bed-frame-to-rod-bracket-left",
                "printed-zaxis-rod-bed-frame-to-rod-bracket-right",
                {id: "bearing-lm16luu", count: 2},
                {id: "screw-M5x10-DIN912", count: 28},
                {id: "profile-nut-for-plastic-M5", count: 28},
            ]
        },
        {
            id: "axis-Z-feed-screw",
            caption: "Привод оси Z",
            variants: [
                {
                    if: "option-zaxis-motion-type-leadscrew-t8-2",
                    require: [
                        "leadscrew-t8-2-450mm-with-nut",
                        // Гайка + крепёж к раме стола
                        {id: "screw-М3х12-DIN912", count: 4},
                        {id: "nut-M3-DIN934", count: 4},
                        "printed-zaxis-bed-frame-to-screw-leadscrew-t8",
                        {id: "screw-M5x10-DIN912", count: 4},
                        {id: "washer-M5-DIN125", count: 4},
                        {id: "profile-nut-for-plastic-M5", count: 4},
                        // Верхнее крепление
                        "bearing-kp08",
                        {id: "screw-M5x16-DIN912", count: 2},
                        {id: "washer-M5-DIN125", count: 2},
                        {id: "nut-M5-DIN934", count: 2},
                        "printed-zaxis-top-screw-mount-leadscrew-t8",
                        {id: "screw-M5x10-DIN912", count: 3},
                        {id: "washer-M5-DIN125", count: 3},
                        {id: "profile-nut-for-plastic-M5", count: 3},
                        // Нижняя опора
                        "bearing-fl08",
                        {id: "screw-M5x16-DIN912", count: 2},
                        {id: "washer-M5-DIN125", count: 2},
                        {id: "nut-M5-DIN934", count: 2},
                        "printed-zaxis-motor-mount-leadscrew-t8",
                        {id: "screw-M5x10-DIN912", count: 4},
                        {id: "washer-M5-DIN125", count: 4},
                        {id: "profile-nut-for-plastic-M5", count: 4},
                        "motor-nema17-hs4401",
                        {id: "screw-М3х8-DIN912", count: 4},
                        {id: "washer-M3-DIN433", count: 4},
                        "flex-shaft-coupler-5x8"
                    ]
                },
                {
                    if: "option-zaxis-motion-type-leadscrew-t12-2",
                    require: [
                        "leadscrew-t12-2-450mm-with-nut",
                        // Гайка + крепёж к раме стола
                        {id: "screw-М4х16-DIN912", count: 4},
                        {id: "washer-M4-DIN125", count: 4},
                        {id: "nut-M4-DIN934", count: 4},
                        "printed-zaxis-bed-frame-to-screw-leadscrew-t12",
                        {id: "screw-M5x10-DIN912", count: 4},
                        {id: "washer-M5-DIN125", count: 4},
                        {id: "profile-nut-for-plastic-M5", count: 4},
                        // Верхнее крепление
                        "bearing-kp012",
                        {id: "screw-M6x20-DIN912", count: 2},
                        {id: "washer-M6-DIN125", count: 2},
                        {id: "nut-M6-DIN934", count: 2},
                        "printed-zaxis-top-screw-mount-leadscrew-t12-m12",
                        {id: "screw-M5x10-DIN912", count: 2},
                        {id: "washer-M5-DIN125", count: 2},
                        {id: "profile-nut-for-plastic-M5", count: 2},
                        // Нижняя опора
                        "bearing-fl012",
                        {id: "screw-M6x20-DIN912", count: 2},
                        {id: "washer-M6-DIN125", count: 2},
                        {id: "nut-M6-DIN934", count: 2},
                        "printed-zaxis-motor-mount-leadscrew-t12-m12",
                        {id: "screw-M5x10-DIN912", count: 4},
                        {id: "washer-M5-DIN125", count: 4},
                        {id: "profile-nut-for-plastic-M5", count: 4},
                        "motor-nema17-hs4401",
                        {id: "screw-М3х8-DIN912", count: 4},
                        {id: "washer-M3-DIN433", count: 4},
                        "flex-shaft-coupler-5x12"
                    ]
                },
                {
                    if: "option-zaxis-motion-type-threadrod-m12",
                    warning: "не ясно, как крепится гайка винта к кронштейну",
                    require: [
                        // Гайка + крепёж к раме стола
                        "printed-zaxis-bed-frame-to-screw-leadscrew-m12",
                        "leadscrew-m12-450mm-with-nut",
                        {id: "screw-M5x10-DIN912", count: 4},
                        {id: "washer-M5-DIN125", count: 4},
                        {id: "profile-nut-for-plastic-M5", count: 4},
                        // Верхнее крепление
                        "bearing-kp012",
                        {id: "screw-M6x20-DIN912", count: 2},
                        {id: "washer-M6-DIN125", count: 2},
                        {id: "nut-M6-DIN934", count: 2},
                        "printed-zaxis-top-screw-mount-leadscrew-t12-m12",
                        {id: "screw-M5x10-DIN912", count: 2},
                        {id: "washer-M5-DIN125", count: 2},
                        {id: "profile-nut-for-plastic-M5", count: 2},
                        // Нижняя опора
                        "bearing-fl012",
                        {id: "screw-M6x20-DIN912", count: 2},
                        {id: "washer-M6-DIN125", count: 2},
                        {id: "nut-M6-DIN934", count: 2},
                        "printed-zaxis-motor-mount-leadscrew-t12-m12",
                        {id: "screw-M5x10-DIN912", count: 4},
                        {id: "washer-M5-DIN125", count: 4},
                        {id: "profile-nut-for-plastic-M5", count: 4},
                        "motor-nema17-hs4401",
                        {id: "screw-М3х8-DIN912", count: 4},
                        {id: "washer-M3-DIN433", count: 4},
                        "flex-shaft-coupler-5x12"
                    ]
                },
                {
                    if: "option-zaxis-motion-type-ballscrew-sfu1204-end-machined",
                    require: [
                        "ballscrew-sfu1204-end-machined-450mm-with-22mm-nut",
                        // Гайка + крепёж к раме стола
                        {id: "screw-М4х20-DIN912", count: 6},
                        {id: "washer-M4-DIN125", count: 6},
                        {id: "nut-M4-DIN934", count: 6},
                        "printed-zaxis-bed-frame-to-screw-ballscrew-sfu1204-22mm-nut",
                        {id: "screw-M5x10-DIN912", count: 4},
                        {id: "washer-M5-DIN125", count: 4},
                        {id: "profile-nut-for-plastic-M5", count: 4},
                        // Верхнее крепление
                        "bearing-bf10",
                        {id: "screw-M6x45-DIN912", count: 2},
                        {id: "washer-M6-DIN125", count: 2},
                        {id: "nut-M6-DIN934", count: 2},
                        "printed-zaxis-top-screw-mount-ballscrew-sfu1204-end-machined",
                        {id: "screw-M5x10-DIN912", count: 2},
                        {id: "washer-M5-DIN125", count: 2},
                        {id: "profile-nut-for-plastic-M5", count: 2},
                        // Нижняя опора
                        "bearing-fk10",
                        {id: "screw-М4х25-DIN912", count: 4},
                        {id: "washer-M4-DIN125", count: 4},
                        {id: "nut-M4-DIN934", count: 4},
                        "printed-zaxis-motor-mount-ballscrew-sfu1204-end-machined",
                        {id: "screw-M5x10-DIN912", count: 4},
                        {id: "washer-M5-DIN125", count: 4},
                        {id: "profile-nut-for-plastic-M5", count: 4},
                        "motor-nema17-hs4401",
                        {id: "screw-М3х8-DIN912", count: 4},
                        {id: "washer-M3-DIN433", count: 4},
                        "flex-shaft-coupler-5x8"
                    ]
                },
                {
                    if: "option-zaxis-motion-type-ballscrew-sfu1204-non-machined",
                    require: [
                        "ballscrew-sfu1204-non-machined-450mm-with-22mm-nut",
                        // Гайка + крепёж к раме стола
                        {id: "screw-М4х20-DIN912", count: 6},
                        {id: "washer-M4-DIN125", count: 6},
                        {id: "nut-M4-DIN934", count: 6},
                        "printed-zaxis-bed-frame-to-screw-ballscrew-sfu1204-22mm-nut",
                        {id: "screw-M5x10-DIN912", count: 4},
                        {id: "washer-M5-DIN125", count: 4},
                        {id: "profile-nut-for-plastic-M5", count: 4},
                        // Верхнее крепление
                        "bearing-kp012",
                        {id: "screw-M6x20-DIN912", count: 2},
                        {id: "washer-M6-DIN125", count: 2},
                        {id: "nut-M6-DIN934", count: 2},
                        "printed-zaxis-top-screw-mount-leadscrew-t12-m12",
                        {id: "screw-M5x10-DIN912", count: 2},
                        {id: "washer-M5-DIN125", count: 2},
                        {id: "profile-nut-for-plastic-M5", count: 2},
                        // Нижняя опора
                        "bearing-fl012",
                        {id: "screw-M6x20-DIN912", count: 2},
                        {id: "washer-M6-DIN125", count: 2},
                        {id: "nut-M6-DIN934", count: 2},
                        "printed-zaxis-motor-mount-leadscrew-t12-m12",
                        {id: "screw-M5x10-DIN912", count: 4},
                        {id: "washer-M5-DIN125", count: 4},
                        {id: "profile-nut-for-plastic-M5", count: 4},
                        "motor-nema17-hs4401",
                        {id: "screw-М3х8-DIN912", count: 4},
                        {id: "washer-M3-DIN433", count: 4},
                        "flex-shaft-coupler-5x12"
                    ]
                }
            ]
        },
        {
            id: "axis-Z-endstops",
            caption: "Концевик оси Z",
            require: [
                "printed-zaxis-endstop-mount",
                {id: "screw-M5x10-DIN965", count: 2},
                {id: "v-slot-t-nut-M5", count: 2},
                "optical-endstop",
                {id: "screw-М3х10-DIN912", count: 2},
                {id: "washer-M3-DIN433", count: 2},
                {id: "nut-M3-DIN934", count: 2},
                "printed-zaxis-endstop-flag-mount",
                {id: "screw-М3х10-DIN912", count: 1},
                {id: "nut-M3-DIN934", count: 1},
                "printed-zaxis-endstop-flag",
                {id: "screw-М3х25-DIN912", count: 1},
                {id: "nut-M3-DIN934", count: 1},
                {id: "nut-M3-DIN985", count: 1},
            ]
        },

        {
            id: "profile-nut-for-plastic-M5",
            require: [
                {id: "nut-M5-DIN562", if: "option-profile-nuts-square"},
                {id: "v-slot-t-nut-M5", if: "option-profile-nuts-t-nuts"}
            ]
        }
    ]
};