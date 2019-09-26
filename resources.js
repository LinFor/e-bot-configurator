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
                    caption: "Под винты M6 (отверстия в профиле Ø > 4.2мм)"
                },
                {
                    id: "option-profile-thread-M5",
                    caption: "Под винты M5 (отверстия в профиле Ø ≤ 4.2мм)"
                }
            ]
        },
        {
            id: "option-casing",
            caption: "Обшивка",
        },
        {
            id: "option-2020-x-profile",
            caption: "Альтернативный профиль оси Х (2020)",
        }
    ],
    "variables": [
        {
            id: "base-frame",
            variants: [
                {
                    if: "option-body-300x300-v1-01",
                    require: [
                        {id: "profile-A1", count: 1},
                        {id: "profile-A2", count: 1},
                        {id: "profile-A3", count: 1},
                        {id: "profile-A4", count: 1},
                        {id: "profile-B1", count: 1},
                        {id: "profile-B2", count: 1},
                        {id: "profile-C1", count: 1},
                        {id: "profile-D1", count: 1},
                        {id: "profile-D2", count: 1},
                        {id: "profile-E1", count: 1},
                        {id: "profile-F1", count: 1},
                        {id: "profile-F2", count: 1},
                        {id: "profile-F3", count: 1},
                        {id: "profile-G1", count: 1},
                        {id: "profile-G2", count: 1},
                        {id: "profile-H1", count: 1},
                        {id: "profile-H2", count: 1},
                        {id: "profile-I1I2", count: 1},
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
                "top-front-left-corner"
            ]
        },
        {
            id: "profile-A2",
            caption: "Стойка A2",
            require: [
                {id: "profile-v-slot-2040-520mm", count: 1},
                {id: "profile-tore-screw", count: 2},
                {id: "profile-corner-strong", count: 2},
                "top-rear-left-corner"
            ]
        },
        {
            id: "profile-A3",
            caption: "Стойка A3",
            require: [
                {id: "profile-v-slot-2040-520mm", count: 1},
                {id: "profile-tore-screw", count: 2},
                {id: "profile-corner-strong", count: 2},
                "top-rear-right-corner"
            ]
        },
        {
            id: "profile-A4",
            caption: "Стойка A4",
            require: [
                {id: "profile-v-slot-2040-520mm", count: 1},
                {id: "profile-tore-screw", count: 2},
                {id: "profile-corner-strong", count: 2},
                "top-front-right-corner"
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
            require: {id: "profile-v-slot-2020-470mm", count: 1}
        },
        {
            id: "profile-D2",
            caption: "Продольный профиль D2",
            require: {id: "profile-v-slot-2020-470mm", count: 1}
        },
        {
            id: "profile-E1",
            caption: "Нижний профиль E1",
            require: {id: "profile-v-slot-2020-500mm", count: 1}
        },
        {
            id: "profile-F1",
            caption: "Нижний профиль F1",
            require: {id: "profile-v-slot-2020-460mm", count: 1}
        },
        {
            id: "profile-F2",
            caption: "Нижний профиль F2",
            require: {id: "profile-v-slot-2020-460mm", count: 1}
        },
        {
            id: "profile-F3",
            caption: "Поперечный профиль F3",
            require: {id: "profile-v-slot-2020-460mm", count: 1}
        },
        {
            id: "profile-G1",
            caption: "Профиль стола G1",
            require: {id: "profile-v-slot-2020-440mm", count: 1}
        },
        {
            id: "profile-G2",
            caption: "Профиль стола G2",
            require: {id: "profile-v-slot-2020-440mm", count: 1}
        },
        {
            id: "profile-H1",
            caption: "Профиль стола H1",
            require: {id: "profile-v-slot-2020-260mm", count: 1}
        },
        {
            id: "profile-H2",
            caption: "Профиль стола H2",
            require: {id: "profile-v-slot-2020-260mm", count: 1}
        },
        {
            id: "profile-I1I2",
            caption: "Профиль оси I1/I2",
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
                        {id: "washer-M5", count: 4},
                        {id: "profile-nut-for-plastic-M5", count: 4}
                    ]
                },
                {
                    if: "option-corners-plastic-2020",
                    require: [
                        {id: "printed-corner-2020", count: 1},
                        {id: "screw-M5x10-DIN912", count: 2},
                        {id: "washer-M5", count: 2},
                        {id: "profile-nut-for-plastic-M5", count: 2}
                    ]
                },
                {
                    if: "option-corners-metal-2040",
                    require: [
                        {id: "metal-corner-2040", count: 1},
                        {id: "screw-M5x10-DIN912", count: 4},
                        {id: "washer-M5", count: 4},
                        {id: "v-slot-t-block-M5", count: 4}
                    ]
                },
                {
                    if: "option-corners-metal-2020",
                    require: [
                        {id: "metal-corner-2020", count: 1},
                        {id: "screw-M5x10-DIN912", count: 2},
                        {id: "washer-M5", count: 2},
                        {id: "v-slot-t-block-M5", count: 2}
                    ]
                }
            ]
        },
        {
            id: "printed-front-left-corner",
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
                {id: "washer-M5", count: 5},
                {id: "profile-nut-for-plastic-M5", count: 9},
                {id: "screw-М3х8-DIN912", count: 4},
                {id: "washer-M3", count: 4},
                "motor-nema17-hs4401"
            ]
        },
        {
            id: "top-front-right-corner",
            caption: "Стык A4-B2-F3",
            require: [
                "printed-front-right-corner",
                {id: "screw-M5x10-DIN912", count: 9},
                {id: "washer-M5", count: 5},
                {id: "profile-nut-for-plastic-M5", count: 9},
                {id: "screw-М3х8-DIN912", count: 4},
                {id: "washer-M3", count: 4},
                "motor-nema17-hs4401"
            ]
        },
        {
            id: "top-rear-left-corner",
            caption: "Стык A2-B1-C1",
            require: [
                "printed-rear-left-corner",
                {id: "screw-M5x10-DIN912", count: 14},
                {id: "washer-M5", count: 14},
                {id: "profile-nut-for-plastic-M5", count: 14},
                {id: "bearing-f623zz", count: 4},
                {id: "screw-М3х20-DIN912", count: 2},
                {id: "washer-M3", count: 2},
                {id: "nut-M3-DIN934", count: 2}
            ]
        },
        {
            id: "top-rear-right-corner",
            caption: "Стык A3-B2-C1",
            require: [
                "printed-rear-right-corner",
                {id: "screw-M5x10-DIN912", count: 14},
                {id: "washer-M5", count: 14},
                {id: "profile-nut-for-plastic-M5", count: 14},
                {id: "bearing-f623zz", count: 4},
                {id: "screw-М3х20-DIN912", count: 2},
                {id: "washer-M3", count: 2},
                {id: "nut-M3-DIN934", count: 2}
            ]
        },


        {
            id: "profile-nut-for-plastic-M5",
            require: [
                {id: "nut-M5-square", if: "option-profile-nuts-square"},
                {id: "v-slot-t-nut-M5", if: "option-profile-nuts-t-nuts"}
            ]
        }
    ],
    "parts": [
        {
            caption: "Механика",
            contents: [
                {
                    id: "profile-v-slot-2040-520mm",
                    caption: "Профиль конструкционный 2040 (520мм)",
                    url: ""
                },
                {
                    id: "profile-v-slot-2040-490mm",
                    caption: "Профиль конструкционный 2040 (490мм)",
                    url: ""
                },
                {
                    id: "profile-v-slot-2040-480mm",
                    caption: "Профиль конструкционный 2040 (480мм)",
                    url: ""
                },
                {
                    id: "profile-v-slot-2040-460mm",
                    caption: "Профиль конструкционный 2040 (460мм)",
                    url: ""
                },
                {
                    id: "profile-v-slot-2020-500mm",
                    caption: "Профиль конструкционный 2020 (500мм)",
                    url: ""
                },
                {
                    id: "profile-v-slot-2020-480mm",
                    caption: "Профиль конструкционный 2020 (480мм)",
                    url: ""
                },
                {
                    id: "profile-v-slot-2020-470mm",
                    caption: "Профиль конструкционный 2020 (470мм)",
                    url: ""
                },
                {
                    id: "profile-v-slot-2020-460mm",
                    caption: "Профиль конструкционный 2020 (460мм)",
                    url: ""
                },
                {
                    id: "profile-v-slot-2020-440mm",
                    caption: "Профиль конструкционный 2020 (440мм)",
                    url: ""
                },
                {
                    id: "profile-v-slot-2020-260mm",
                    caption: "Профиль конструкционный 2020 (260мм)",
                    url: ""
                },

                {
                    id: "pulley-GT2-bore-5mm-16T",
                    caption: "Шкив ведущий GT2 16 зубов (под вал 5мм)",
                    url: ""
                },
                {
                    id: "pulley-GT2-bore-5mm-20T",
                    caption: "Шкив ведущий GT2 20 зубов (под вал 5мм)",
                    url: ""
                },
                {
                    id: "bearing-625zz",
                    caption: "Подшипник 625ZZ",
                    url: ""
                },
                {
                    id: "bearing-f623zz",
                    caption: "Подшипник F623ZZ",
                    url: ""
                },
                {
                    id: "motor-nema17-hs4401",
                    caption: "Шаговый двигатель NEMA17 (HS4401)",
                    url: ""
                },        
            ]
        },
        {
            caption: "Крепёж",
            contents: [
                {
                    id: "metal-corner-2020",
                    caption: "Уголок 20х20 (алюминиевый)",
                    url: ""
                },
                {
                    id: "metal-corner-2040",
                    caption: "Уголок 20х40 (алюминиевый)",
                    url: ""
                },
            ]
        },
        {
            caption: "Метизы",
            contents: [
                {
                    id: "screw-М3х8-DIN912",
                    caption: "Болт М3х8 DIN912",
                    url: ""
                },
                {
                    id: "screw-М3х20-DIN912",
                    caption: "Болт М3х20 DIN912",
                    url: ""
                },
                {
                    id: "washer-M3",
                    caption: "Шайба M3",
                    url: ""
                },
                {
                    id: "nut-M3-DIN934",
                    caption: "Гайка М3 DIN934",
                    url: ""
                },
                {
                    id: "screw-M5x10-DIN912",
                    caption: "Болт М5х10 DIN912",
                    url: ""
                },
                {
                    id: "screw-M5x16-DIN912",
                    caption: "Болт М5х16 DIN912",
                    url: ""
                },
                {
                    id: "washer-M5",
                    caption: "Шайба M5",
                    url: ""
                },
                {
                    id: "nut-M5-square",
                    caption: "Гайка квадратная M5",
                    url: ""
                },
                {
                    id: "v-slot-t-nut-M5",
                    caption: "Поворотная Т-гайка M5",
                    url: ""
                },
                {
                    id: "v-slot-t-block-M5",
                    caption: "Сухарь М5",
                    url: ""
                },
                {
                    id: "screw-M6x16-DIN912",
                    caption: "Болт М6х16 DIN912"
                },
            ]
        },
        {
            caption: "Печатные детали",
            contents: [
                {
                    id: "printed-corner-2020",
                    caption: "Уголок 20х20 (печатный)",
                    modelUrl: ""
                },
                {
                    id: "printed-corner-2040",
                    caption: "Уголок усиленный 20х40 (печатный)",
                    modelUrl: ""
                },
        
                {
                    id: "printed-front-left-corner-16T",
                    caption: "Передний левый угол (шкивы 16T)",
                    modelUrl: "Motor_Mount_Left_16t.stl",
                },
                {
                    id: "printed-front-left-corner-20T",
                    caption: "Передний левый угол (шкивы 20T)",
                    modelUrl: "Motor_Mount_Left_20t.stl",
                },
                {
                    id: "printed-front-left-corner-16T-bearing",
                    caption: "Передний левый угол (шкивы 16T с подшипником)",
                    pictureUrl: "https://e-bot.org/downloads/pic/Motor_Mount_Left_16t_b.png",
                    modelUrl: "Motor_Mount_Left_16t_b.stl"
                },
                {
                    id: "printed-front-left-corner-20T-bearing",
                    caption: "Передний левый угол (шкивы 20T с подшипником)",
                    modelUrl: "Motor_Mount_Left_20t_b.stl"
                },
        
                {
                    id: "printed-front-right-corner-16T",
                    caption: "Передний правый угол (шкивы 16T)",
                    modelUrl: "Motor_Mount_Right_16t.stl",
                },
                {
                    id: "printed-front-right-corner-20T",
                    caption: "Передний правый угол (шкивы 20T)",
                    modelUrl: "Motor_Mount_Right_20t.stl",
                },
                {
                    id: "printed-front-right-corner-16T-bearing",
                    caption: "Передний правый угол (шкивы 16T с подшипником)",
                    modelUrl: "Motor_Mount_Right_16t_b.stl",
                },
                {
                    id: "printed-front-right-corner-20T-bearing",
                    caption: "Передний правый угол (шкивы 20T с подшипником)",
                    modelUrl: "Motor_Mount_Right_20t_b.stl",
                },
        
                {
                    id: "printed-rear-left-corner-16T",
                    caption: "Задний левый угол (шкивы 16T)",
                    modelUrl: "Rear_Idler_Left_16t.stl",
                },
                {
                    id: "printed-rear-left-corner-20T",
                    caption: "Задний левый угол (шкивы 20T)",
                    modelUrl: "Rear_Idler_Left_20t.stl",
                },
        
                {
                    id: "printed-rear-right-corner-16T",
                    caption: "Задний правый угол (шкивы 16T)",
                    modelUrl: "Rear_Idler_Right_16t.stl",
                },
                {
                    id: "printed-rear-right-corner-20T",
                    caption: "Задний правый угол (шкивы 20T)",
                    modelUrl: "Rear_Idler_Right_20t.stl",
                },
        
                {
                    id: "printed-yaxis-left-caret-16T",
                    caption: "Крепление оси Y левое (шкивы 16T)",
                    modelUrl: "Y_Left_16t.stl",
                },
                {
                    id: "printed-yaxis-left-caret-20T",
                    caption: "Крепление оси Y левое (шкивы 20T)",
                    modelUrl: "Y_Left_20t.stl",
                },
        
                {
                    id: "printed-yaxis-right-caret-16T",
                    caption: "Крепление оси Y правое (шкивы 16T)",
                    modelUrl: "Y_Right_16t.stl",
                },
                {
                    id: "printed-yaxis-right-caret-20T",
                    caption: "Крепление оси Y правое (шкивы 20T)",
                    modelUrl: "Y_Right_20t.stl",
                },

                {
                    id: "v-slot-printed-block-M3",
                    caption: "Печатный сухарь под M3",
                    modelUrl: ""
                },
            ]
        }
    ]
};