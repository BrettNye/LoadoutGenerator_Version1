//Holds array containing primary weapons
var Weapon1 = [
        {
            gun: "XM4",
            image: "gun16.jpg",
            gunType: "Assault"
        },
        {
            gun: "AK-47",
            image: "gun2.jpg",
            gunType: "Assault"
        },
        {
            gun: "Krig 6",
            image: "gun3.jpg",
            gunType: "Assault"
        },
        {
            gun: "QBZ-83",
            image: "gun17.jpg",
            gunType: "Assault"
        },
        {
            gun: "FFAR 1",
            image: "gun18.jpg",
            gunType: "Assault"
        },
        {
            gun: "MP5",
            image: "gun0.JPG",
            gunType: "Submachine"
        },
        {
            gun: "Milano 821",
            image: "gun5.jpg",
            gunType: "Submachine"
        },
        {
            gun: "AK-74u",
            image: "gun6.jpg",
            gunType: "Submachine"
        },
        {
            gun: "KSP 45",
            image: "gun1.jpg",
            gunType: "Submachine"
        },
        {
            gun: "Bullfrog",
            image: "gun15.jpg",
            gunType: "Submachine"
        },
        {
            gun: "Type63",
            image: "gun7.jpg",
            gunType: "Tactical"
        },
        {
            gun: "M16",
            image: "gun8.jpg",
            gunType: "Tactical"
        },
        {
            gun: "AUG",
            image: "gun19.jpg",
            gunType: "Tactical"
        },
        {
            gun: "DMR14",
            image: "gun20.jpg",
            gunType: "Tactical"
        },
        {
            gun: "Stoner 63",
            image: "gun9.jpg",
            gunType: "LMG"
        },
        {
            gun: "RPD",
            image: "gun10.jpg",
            gunType: "LMG"
        },
        {
            gun: "M60",
            image: "gun21.jpg",
            gunType: "LMG"
        },
        {
            gun: "Pelington 703",
            image: "gun28.jpg",
            gunType: "Sniper"
        },
        {
            gun: "LW3-Tundra",
            image: "gun11.jpg",
            gunType: "Sniper"
        },
        {
            gun: "M82",
            image: "gun4.jpg",
            gunType: "Sniper"
        }
    ];
//Holds array containing Secondary weapons
var Weapon2 = [
        {
            gun: "1911",
            image: "gun22.jpg",
            gunType: "Pistol"
        },
        {
            gun: "Magnum",
            image: "gun23.jpg",
            gunType: "Pistol"
        },
        {
            gun: "Diamatti",
            image: "gun24.jpg",
            gunType: "Pistol"
        },
        {
            gun: "Hauer 77",
            image: "gun12.jpg",
            gunType: "Shotgun"
        },
        {
            gun: "Gallo SA12",
            image: "gun25.jpg",
            gunType: "Shotgun"
        },
        {
            gun: "Cigma 2",
            image: "gun13.jpg",
            gunType: "Launcher"
        },
        {
            gun: "RPG-7",
            image: "gun26.jpg",
            gunType: "Launcher"
        },
        {
            gun: "Knife",
            image: "gun14.jpg",
            gunType: "Melee"
        },
        {
            gun: "M79",
            image: "gun27.jpg",
            gunType: "Special"
        }
    ];
//Holds attachments for snipers
var SniperAttachments = [
     {
        ID: 1,
        name: "VISIONTECH 2X",
        image: "Attachment1.jpg",
        type: "Scope",
        Weapons: ["Pelington 703", "LW3-Tundra", "M82"]
    },
    {
        ID: 1,
        name: "Kobra Red Dot",
        image: "Attachment2.jpg",
        type: "Scope",
        Weapons: ["Pelington 703", "LW3-Tundra", "M82"]
    },
    {
        ID: 1,
        name: "Axial Arms 3X",
        image: "Attachment4.jpg",
        type: "Scope",
        Weapons: ["Pelington 703", "LW3-Tundra", "M82"]
    },
    {
        ID: 1,
        name: "Iron Sights",
        image: "Attachment65.jpg",
        type: "Scope",
        Weapons: ["Pelington 703", "LW3-Tundra", "M82"]
    },
    {
        ID: 1,
        name: "Silix Holoscout",
        image: "Attachment43.jpg",
        type: "Scope",
        Weapons: ["Pelington 703", "LW3-Tundra", "M82"]
    },
    {
        ID: 1,
        name: "Royal & Kross 4X",
        image: "Attachment79.jpg",
        type: "Scope",
        Weapons: ["Pelington 703", "LW3-Tundra", "M82"]
    },
    {
        ID: 1,
        name: "Susat Multizoom",
        image: "Attachment89.jpg",
        type: "Scope",
        Weapons: ["Pelington 703", "LW3-Tundra", "M82"]
    },
    {
        ID: 1,
        name: "Vulture Custom Zoom",
        image: "Attachment1000.jpg",
        type: "Scope",
        Weapons: ["Pelington 703", "LW3-Tundra", "M82"]
    },
    {
        ID: 1,
        name: "Millstop Reflex",
        image: "Attachment0.jpg",
        type: "Scope",
        Weapons: ["Pelington 703", "LW3-Tundra", "M82"]
    },
    {
        ID: 1,
        name: "Hangman RF",
        image: "Attachment1000.jpg",
        type: "Scope",
        Weapons: ["Pelington 703", "LW3-Tundra", "M82"]
    },
    {
        ID: 1,
        name: "Ultrazoom Custom",
        image: "Attachment1000.jpg",
        type: "Scope",
        Weapons: ["Pelington 703", "LW3-Tundra", "M82"]
    },
    {
        ID: 1,
        name: "An/PVS-4 Thermal",
        image: "Attachment91.jpg",
        type: "Scope",
        Weapons: ["Pelington 703", "LW3-Tundra", "M82"]
    },
    {
        ID: 2,
        name: "Stabilizer .308",
        image: "Attachment66.jpg",
        type: "Muzzle",
        Weapons: ["Pelington 703", "LW3-Tundra"]
    },
    {
        ID: 2,
        name: "Flash Hider .308",
        image: "Attachment67.jpg",
        type: "Muzzle",
        Weapons: ["Pelington 703", "LW3-Tundra"]
    },
    {
        ID: 2,
        name: "Sound Moderator",
        image: "Attachment68.jpg",
        type: "Muzzle",
        Weapons: ["Pelington 703", "LW3-Tundra", "M82"]
    },
    {
        ID: 2,
        name: "Infantry Stabilizer",
        image: "Attachment88.jpg",
        type: "Muzzle",
        Weapons: ["Pelington 703", "LW3-Tundra", "M82"]
    },
    {
        ID: 2,
        name: "Task Force Shroud",
        image: "Attachment1000.jpg",
        type: "Muzzle",
        Weapons: ["Pelington 703", "LW3-Tundra", "M82"]
    },
    {
        ID: 2,
        name: "Wrapped Suppressor",
        image: "Attachment1000.jpg",
        type: "Muzzle",
        Weapons: ["Pelington 703", "LW3-Tundra", "M82"]
    },
    {
        ID: 3,
        name: "28.2\" Extended",
        image: "Attachment1000.jpg",
        type: "Barrel",
        Weapons: ["LW3-Tundra"]
    },
    {
        ID: 3,
        name: "26.5\" Cavalry Lancer",
        image: "Attachment1000.jpg",
        type: "Barrel",
        Weapons: ["LW3-Tundra"]
    },
    {
        ID: 3,
        name: "25.8\" Rapid Fire",
        image: "Attachment1000.jpg",
        type: "Barrel",
        Weapons: ["LW3-Tundra"]
    },
    {
        ID: 3,
        name: "29.1\" Combat Recon",
        image: "Attachment1000.jpg",
        type: "Barrel",
        Weapons: ["LW3-Tundra"]
    },
    {
        ID: 3,
        name: "26.5\" Hammer Forged",
        image: "Attachment1000.jpg",
        type: "Barrel",
        Weapons: ["LW3-Tundra"]
    },
    {
        ID: 3,
        name: "26.5\" Hammer Forged",
        image: "Attachment1000.jpg",
        type: "Barrel",
        Weapons: ["LW3-Tundra"]
    },
    {
        ID: 3,
        name: "28.2\" Tiger Team",
        image: "Attachment1000.jpg",
        type: "Barrel",
        Weapons: ["LW3-Tundra"]
    },
        {
        ID: 3,
        name: "25\" Extended",
        image: "Attachment1000.jpg",
        type: "Barrel",
        Weapons: ["Pelington 703"]
    },
    {
        ID: 3,
        name: "23.3\" Cavalry Lancer",
        image: "Attachment1000.jpg",
        type: "Barrel",
        Weapons: ["Pelington 703"]
    },
    {
        ID: 3,
        name: "25\" Reinforced Heavy",
        image: "Attachment1000.jpg",
        type: "Barrel",
        Weapons: ["Pelington 703"]
    },
    {
        ID: 3,
        name: "27.2\" Combat Recon",
        image: "Attachment1000.jpg",
        type: "Barrel",
        Weapons: ["Pelington 703"]
    },
    {
        ID: 3,
        name: "21.7\" UltraLight",
        image: "Attachment1000.jpg",
        type: "Barrel",
        Weapons: ["Pelington 703"]
    },
    {
        ID: 3,
        name: "26.5\" Tiger Team",
        image: "Attachment1000.jpg",
        type: "Barrel",
        Weapons: ["Pelington 703"]
    },
    {
        ID: 4,
        name: "Steady Aim Laser",
        image: "Attachment12.jpg",
        type: "Body",
        Weapons: ["Pelington 703", "LW3-Tundra", "M82"]
    },
    {
        ID: 4,
        name: "Mounted Flashlight",
        image: "Attachment11.jpg",
        type: "Body",
        Weapons: ["Pelington 703", "LW3-Tundra", "M82"]
    },
    {
        ID: 4,
        name: "Sof Target Designator",
        image: "Attachment13.jpg",
        type: "Body",
        Weapons: ["Pelington 703", "LW3-Tundra", "M82"]
    },
    {
        ID: 4,
        name: "Swat 5MW Laser Sight",
        image: "Attachment52.jpg",
        type: "Body",
        Weapons: ["Pelington 703", "LW3-Tundra", "M82"]
    },
    {
        ID: 4,
        name: "Tiger Team Spotlight",
        image: "Attachment81.jpg",
        type: "Body",
        Weapons: ["Pelington 703", "LW3-Tundra", "M82"]
    },
    {
        ID: 4,
        name: "Ember Sighting Point",
        image: "Attachment93.jpg",
        type: "Body",
        Weapons: ["Pelington 703", "LW3-Tundra", "M82"]
    },
    {
        ID: 5,
        name: "Front Grip",
        image: "Attachment72.jpg",
        type: "UnderBarrel",
        Weapons: ["Pelington 703", "LW3-Tundra", "M82"]
    },
    {
        ID: 5,
        name: "Infiltrator Grip",
        image: "Attachment15.jpg",
        type: "UnderBarrel",
        Weapons: ["Pelington 703", "LW3-Tundra", "M82"]
    },
    {
        ID: 5,
        name: "Patrol Grip",
        image: "Attachment16.jpg",
        type: "UnderBarrel",
        Weapons: ["Pelington 703", "LW3-Tundra", "M82"]
    },
    {
        ID: 5,
        name: "Bruiser Grip",
        image: "Attachment53.jpg",
        type: "UnderBarrel",
        Weapons: ["Pelington 703", "LW3-Tundra", "M82"]
    },
    {
        ID: 5,
        name: "Bipod",
        image: "Attachment1000.jpg",
        type: "UnderBarrel",
        Weapons: ["Pelington 703", "LW3-Tundra", "M82"]
    },
    {
        ID: 5,
        name: "SFOD SpeedGrip",
        image: "Attachment94.jpg",
        type: "UnderBarrel",
        Weapons: ["Pelington 703", "LW3-Tundra", "M82"]
    },
    {
        ID: 6,
        name: "7 RND",
        image: "Attachment73.jpg",
        type: "Magazine",
        Weapons: ["Pelington 703", "LW3-Tundra", "M82"]
    },
    {
        ID: 6,
        name: "Fast Mag",
        image: "Attachment1000.jpg",
        type: "Magazine",
        Weapons: ["LW3-Tundra", "M82"]
    },
    {
        ID: 6,
        name: "7 RND Speed Mag",
        image: "Attachment1000.jpg",
        type: "Magazine",
        Weapons: ["Pelington 703", "LW3-Tundra", "M82"]
    },
    {
        ID: 6,
        name: "Stanag 9 RND",
        image: "Attachment1000.jpg",
        type: "Magazine",
        Weapons: ["Pelington 703", "LW3-Tundra", "M82"]
    },
    {
        ID: 6,
        name: "Vandal Speed Loader",
        image: "Attachment1000.jpg",
        type: "Magazine",
        Weapons: ["Pelington 703", "LW3-Tundra", "M82"]
    },
    {
        ID: 6,
        name: "Salvo 9 RND Fast Mag",
        image: "Attachment1000.jpg",
        type: "Magazine",
        Weapons: ["Pelington 703", "LW3-Tundra", "M82"]
    },
    {
        ID: 6,
        name: "Fast Loader",
        image: "Attachment74.jpg",
        type: "Magazine",
        sniper: ["Pelington 703"]
    },
    {
        ID: 7,
        name: "Speed Tape",
        image: "Attachment21.jpg",
        type: "Handle",
        Weapons: ["Pelington 703", "LW3-Tundra", "M82"]
    },
    {
        ID: 7,
        name: "Dropshot Wrap",
        image: "Attachment20.jpg",
        type: "Handle",
        Weapons: ["Pelington 703", "LW3-Tundra", "M82"]
    },
    {
        ID: 7,
        name: "Field Tape",
        image: "Attachment55.jpg",
        type: "Handle",
        Weapons: ["Pelington 703", "LW3-Tundra", "M82"]
    },
    {
        ID: 7,
        name: "SASR Jungle Grip",
        image: "Attachment56.jpg",
        type: "Handle",
        Weapons: ["Pelington 703", "LW3-Tundra", "M82"]
    },
    {
        ID: 7,
        name: "Serpent Wrap",
        image: "Attachment84.jpg",
        type: "Handle",
        Weapons: ["Pelington 703", "LW3-Tundra", "M82"]
    },
    {
        ID: 7,
        name: "Airborne Elastic Wrap",
        image: "Attachment96.jpg",
        type: "Handle",
        Weapons: ["Pelington 703", "LW3-Tundra", "M82"]
    },
    {
        ID: 8,
        name: "Tactical Stock",
        image: "Attachment22.jpg",
        type: "Stock",
        Weapons: ["Pelington 703", "LW3-Tundra", "M82"]
    },
    {
        ID: 8,
        name: "CQB Pad",
        image: "Attachment75.jpg",
        type: "Stock",
        Weapons: ["Pelington 703", "LW3-Tundra", "M82"]
    },
    {
        ID: 8,
        name: "Duster Pad",
        image: "Attachment87.jpg",
        type: "Stock",
        Weapons: ["Pelington 703", "LW3-Tundra", "M82"]
    },
    {
        ID: 8,
        name: "Marathon Stock",
        image: "Attachment124.jpg",
        type: "Stock",
        Weapons: ["Pelington 703", "LW3-Tundra", "M82"]
    },
    {
        ID: 8,
        name: "SAS Combat Stock",
        image: "Attachment85.jpg",
        type: "Stock",
        Weapons: ["Pelington 703", "LW3-Tundra", "M82"]
    },
    {
        ID: 8,
        name: "Raider Pad",
        image: "Attachment97.jpg",
        type: "Stock",
        Weapons: ["Pelington 703", "LW3-Tundra", "M82"]
    },
    {
        ID: 9,
        name: "No Attachment",
        image: "Attachment1000.jpg",
        type: "None",
        Weapons: ["Pelington 703", "LW3-Tundra", "M82"]
    },
    {
        ID: 9,
        name: "No Attachment",
        image: "Attachment1000.jpg",
        type: "None",
        Weapons: ["Pelington 703", "LW3-Tundra", "M82"]
    }
];
//Holds attachments for assault rifles
var AssaultAttachments = [
    {
        ID: 1,
        name: "MillStop Reflex",
        image: "Attachment0.jpg",
        type: "Scope",
        Weapons: ["XM4", "Krig 6", "QBZ-83", "FFAR 1", "AK-47"]
    },
    {
        ID: 1,
        name: "VISIONTECH 2X",
        image: "Attachment1.jpg",
        type: "Scope",
        Weapons: ["XM4", "Krig 6", "QBZ-83", "FFAR 1", "AK-47"]
    },
    {
        ID: 1,
        name: "Kobra Red Dot",
        image: "Attachment2.jpg",
        type: "Scope",
        Weapons: ["XM4", "Krig 6", "QBZ-83", "FFAR 1", "AK-47"]
    },
    {
        ID: 1,
        name: "QuickDot LED",
        image: "Attachment3.jpg",
        type: "Scope",
        Weapons: ["XM4", "Krig 6", "QBZ-83", "FFAR 1", "AK-47"]
    },
    {
        ID: 1,
        name: "Axial Arms 3X",
        image: "Attachment4.jpg",
        type: "Scope",
        Weapons: ["XM4", "Krig 6", "QBZ-83", "FFAR 1", "AK-47"]
    },
    {
        ID: 1,
        name: "Sillix Holoscout",
        image: "Attachment43.jpg",
        type: "Scope",
        Weapons: ["XM4", "Krig 6", "QBZ-83", "FFAR 1", "AK-47"]
    },
    {
        ID: 1,
        name: "Microflex LED",
        image: "Attachment47.jpg",
        type: "Scope",
        Weapons: ["XM4", "Krig 6", "QBZ-83", "FFAR 1", "AK-47"]
    },
    {
        ID: 1,
        name: "Hawksmoor",
        image: "Attachment48.jpg",
        type: "Scope",
        Weapons: ["XM4", "Krig 6", "QBZ-83", "FFAR 1", "AK-47"]
    },
    {
        ID: 1,
        name: "Royal & Kross 4X",
        image: "Attachment79.jpg",
        type: "Scope",
        Weapons: ["XM4", "Krig 6", "QBZ-83", "FFAR 1", "AK-47"]
    },
    {
        ID: 1,
        name: "Susat Multizoom",
        image: "Attachment89.jpg",
        type: "Scope",
        Weapons: ["XM4", "Krig 6", "QBZ-83", "FFAR 1", "AK-47"]
    },
    {
        ID: 1,
        name: "Diamondback Reflex",
        image: "Attachment90.jpg",
        type: "Scope",
        Weapons: ["XM4", "Krig 6", "QBZ-83", "FFAR 1", "AK-47"]
    },
    {
        ID: 1,
        name: "AN/PVS-4 Thermal",
        image: "Attachment91.jpg",
        type: "Scope",
        Weapons: ["XM4", "Krig 6", "QBZ-83", "FFAR 1"]
    },
    {
        ID: 1,
        name: "Noch Sova Thermal",
        image: "Attachment98.jpg",
        type: "Scope",
        Weapons: ["AK-47"]
    },
    {
        ID: 2,
        name: "Muzzle Brake 5.56",
        image: "Attachment7.jpg",
        type: "Muzzle",
        Weapons: ["XM4", "Krig 6", "QBZ-83", "FFAR 1"]
    },
    {
        ID: 2,
        name: "Flashguard 5.56",
        image: "Attachment5.jpg",
        type: "Muzzle",
        Weapons: ["XM4", "Krig 6", "QBZ-83", "FFAR 1"]
    },
    {
        ID: 2,
        name: "Suppressor",
        image: "Attachment6.jpg",
        type: "Muzzle",
        Weapons: ["XM4", "Krig 6", "QBZ-83", "FFAR 1", "AK-47"]
    },
    {
        ID: 2,
        name: "Infantry Compensator",
        image: "Attachment44.jpg",
        type: "Muzzle",
        Weapons: ["XM4", "Krig 6", "QBZ-83", "FFAR 1"]
    },
    {
        ID: 2,
        name: "Socom Eliminator",
        image: "Attachment49.jpg",
        type: "Muzzle",
        Weapons: ["XM4", "Krig 6", "QBZ-83", "FFAR 1"]
    },
    {
        ID: 2,
        name: "Agency Suppressor",
        image: "Attachment80.jpg",
        type: "Muzzle",
        Weapons: ["XM4", "Krig 6", "QBZ-83", "FFAR 1"]
    },
    {
        ID: 2,
        name: "Muzzle Brake 7.62",
        image: "Attachment24.jpg",
        type: "Muzzle",
        Weapons: ["AK-47"]
    },
    {
        ID: 2,
        name: "Flashguard 7.62",
        image: "Attachment25.jpg",
        type: "Muzzle",
        Weapons: ["AK-47"]
    },
    {
        ID: 2,
        name: "Spetsnaz Compensator",
        image: "Attachment59.jpg",
        type: "Muzzle",
        Weapons: ["AK-47"]
    },
    {
        ID: 2,
        name: "KGB Eliminator",
        image: "Attachment99.jpg",
        type: "Muzzle",
        Weapons: ["AK-47"]
    },
    {
        ID: 2,
        name: "GRU Suppressor",
        image: "Attachment100.jpg",
        type: "Muzzle",
        Weapons: ["AK-47"]
    },
    {
        ID: 3,
        name: "11.8\" Ranger",
        image: "Attachment8.jpg",
        type: "Barrel",
        Weapons: ["XM4"]
    },
    {
        ID: 3,
        name: "12.5\" Cavalry Lancer",
        image: "Attachment9.jpg",
        type: "Barrel",
        Weapons: ["XM4"]
    },
    {
        ID: 3,
        name: "13.5\" Reinforced Heavy",
        image: "Attachment10.jpg",
        type: "Barrel",
        Weapons: ["XM4"]
    },
    {
        ID: 3,
        name: "13.7\" Extended",
        image: "Attachment50.jpg",
        type: "Barrel",
        Weapons: ["XM4"]
    },
    {
        ID: 3,
        name: "13.7\" Takedown",
        image: "Attachment51.jpg",
        type: "Barrel",
        Weapons: ["XM4"]
    },
    {
        ID: 3,
        name: "13.5\" Task Force",
        image: "Attachment92.jpg",
        type: "Barrel",
        Weapons: ["XM4"]
    },
    {
        ID: 3,
        name: "15.5\" Ultralight",
        image: "Attachment26.jpg",
        type: "Barrel",
        Weapons: ["AK-47"]
    },
    {
        ID: 3,
        name: "16.5\" Cavalry Lancer",
        image: "Attachment27.jpg",
        type: "Barrel",
        Weapons: ["AK-47"]
    },
    {
        ID: 3,
        name: "18.2\" VDV Reinforced",
        image: "Attachment60.jpg",
        type: "Barrel",
        Weapons: ["AK-47"]
    },
    {
        ID: 3,
        name: "20\" Liberator",
        image: "Attachment61.jpg",
        type: "Barrel",
        Weapons: ["AK-47"]
    },
    {
        ID: 3,
        name: "18.2\" Takedown",
        image: "Attachment101.jpg",
        type: "Barrel",
        Weapons: ["AK-47"]
    },
    {
        ID: 3,
        name: "20\" Spetsnaz RPK Barrel",
        image: "Attachment102.jpg",
        type: "Barrel",
        Weapons: ["AK-47"]
    },
    {
        ID: 3,
        name: "16.5\" Ultralight",
        image: "Attachment29.jpg",
        type: "Barrel",
        Weapons: ["Krig 6"]
    },
    {
        ID: 3,
        name: "17.7\" Cavalry Lancer",
        image: "Attachment30.jpg",
        type: "Barrel",
        Weapons: ["Krig 6"]
    },
    {
        ID: 3,
        name: "15.5\" Contour",
        image: "Attachment113.jpg",
        type: "Barrel",
        Weapons: ["Krig 6"]
    },
    {
        ID: 3,
        name: "19.7\" Ranger",
        image: "Attachment114.jpg",
        type: "Barrel",
        Weapons: ["Krig 6"]
    },
    {
        ID: 3,
        name: "19.7\" Takedown",
        image: "Attachment115.jpg",
        type: "Barrel",
        Weapons: ["Krig 6"]
    },
    {
        ID: 3,
        name: "15\" CMV Mil-Spec",
        image: "Attachment116.jpg",
        type: "Barrel",
        Weapons: ["Krig 6"]
    },
    {
        ID: 3,
        name: "13.7\" Ultralight",
        image: "Attachment118.jpg",
        type: "Barrel",
        Weapons: ["QBZ-83"]
    },
    {
        ID: 3,
        name: "13.7\" Cavalry Lancer",
        image: "Attachment119.jpg",
        type: "Barrel",
        Weapons: ["QBZ-83"]
    },
    {
        ID: 3,
        name: "15.5\" Reinforced Heavy",
        image: "Attachment120.jpg",
        type: "Barrel",
        Weapons: ["QBZ-83"]
    },
    {
        ID: 3,
        name: "16.5\" Ranger",
        image: "Attachment121.jpg",
        type: "Barrel",
        Weapons: ["QBZ-83"]
    },
    {
        ID: 3,
        name: "15.5\" Takedown",
        image: "Attachment122.jpg",
        type: "Barrel",
        Weapons: ["QBZ-83"]
    },
    {
        ID: 3,
        name: "15.5\" Task Force",
        image: "Attachment123.jpg",
        type: "Barrel",
        Weapons: ["QBZ-83"]
    },
    {
        ID: 3,
        name: "17.9\" Ultralight",
        image: "Attachment32.jpg",
        type: "Barrel",
        Weapons: ["FFAR 1"]
    },
    {
        ID: 3,
        name: "18.7\" Cavalry Lancer",
        image: "Attachment125.jpg",
        type: "Barrel",
        Weapons: ["FFAR 1"]
    },
    {
        ID: 3,
        name: "19.5\" Reinforced Heavy",
        image: "Attachment126.jpg",
        type: "Barrel",
        Weapons: ["FFAR 1"]
    },
    {
        ID: 3,
        name: "21.2\" Ranger",
        image: "Attachment127.jpg",
        type: "Barrel",
        Weapons: ["FFAR 1"]
    },
    {
        ID: 3,
        name: "20.3\" Takedown",
        image: "Attachment128.jpg",
        type: "Barrel",
        Weapons: ["FFAR 1"]
    },
    {
        ID: 3,
        name: "19.5\" Task Force",
        image: "Attachment129.jpg",
        type: "Barrel",
        Weapons: ["FFAR 1"]
    },
    {
        ID: 4,
        name: "Steady Aim Laser",
        image: "Attachment12.jpg",
        type: "Body",
        Weapons: ["XM4", "Krig 6", "QBZ-83", "FFAR 1", "AK-47"]
    },
    {
        ID: 4,
        name: "Mounted Flashlight",
        image: "Attachment11.jpg",
        type: "Body",
        Weapons: ["XM4", "Krig 6", "QBZ-83", "FFAR 1", "AK-47"]
    },
    {
        ID: 4,
        name: "Sof Target Designator",
        image: "Attachment13.jpg",
        type: "Body",
        Weapons: ["XM4", "Krig 6", "QBZ-83", "FFAR 1"]
    },
    {
        ID: 4,
        name: "Swat 5MW Laser Sight",
        image: "Attachment52.jpg",
        type: "Body",
        Weapons: ["XM4", "Krig 6", "QBZ-83", "FFAR 1"]
    },
    {
        ID: 4,
        name: "Tiger Team Spotlight",
        image: "Attachment81.jpg",
        type: "Body",
        Weapons: ["XM4", "Krig 6", "QBZ-83", "FFAR 1", "AK-47"]
    },
    {
        ID: 4,
        name: "Ember Sighting Point",
        image: "Attachment93.jpg",
        type: "Body",
        Weapons: ["XM4", "Krig 6", "QBZ-83", "FFAR 1", "AK-47"]
    },
    {
        ID: 4,
        name: "KGB Target Designator",
        image: "Attachment62.jpg",
        type: "Body",
        Weapons: ["AK-47"]
    },
    {
        ID: 4,
        name: "GRU 5 MW Laser Sight",
        image: "Attachment63.jpg",
        type: "Body",
        Weapons: ["AK-47"]
    },
    {
        ID: 5,
        name: "Foregrip",
        image: "Attachment14.jpg",
        type: "UnderBarrel",
        Weapons: ["XM4", "Krig 6", "QBZ-83", "FFAR 1", "AK-47"]
    },
    {
        ID: 5,
        name: "Infiltrator Grip",
        image: "Attachment15.jpg",
        type: "UnderBarrel",
        Weapons: ["XM4", "Krig 6", "QBZ-83", "FFAR 1", "AK-47"]
    },
    {
        ID: 5,
        name: "Patrol Grip",
        image: "Attachment16.jpg",
        type: "UnderBarrel",
        Weapons: ["XM4", "Krig 6", "QBZ-83", "FFAR 1", "AK-47"]
    },
    {
        ID: 5,
        name: "Bruiser Grip",
        image: "Attachment53.jpg",
        type: "UnderBarrel",
        Weapons: ["XM4", "Krig 6", "QBZ-83", "FFAR 1", "AK-47"]
    },
    {
        ID: 5,
        name: "Field Agent Grip",
        image: "Attachment82.jpg",
        type: "UnderBarrel",
        Weapons: ["XM4", "Krig 6", "QBZ-83", "FFAR 1"]
    },
    {
        ID: 5,
        name: "SFOD Speed Grip",
        image: "Attachment94.jpg",
        type: "UnderBarrel",
        Weapons: ["XM4", "Krig 6", "QBZ-83", "FFAR 1"]
    },
    {
        ID: 5,
        name: "Spetsnaz Grip",
        image: "Attachment103.jpg",
        type: "UnderBarrel",
        Weapons: ["AK-47"]
    },
    {
        ID: 5,
        name: "Spetsnaz Speed Grip",
        image: "Attachment104.jpg",
        type: "UnderBarrel",
        Weapons: ["AK-47"]
    },
    {
        ID: 6,
        name: "40 RND",
        image: "Attachment17.jpg",
        type: "Magazine",
        Weapons: ["XM4", "Krig 6", "QBZ-83", "AK-47"]
    },
    {
        ID: 6,
        name: "Jungle-Style Mag",
        image: "Attachment18.jpg",
        type: "Magazine",
        Weapons: ["XM4", "Krig 6", "QBZ-83", "FFAR 1"]
    },
    {
        ID: 6,
        name: "40 RND Speed Mag",
        image: "Attachment19.jpg",
        type: "Magazine",
        Weapons: ["XM4", "Krig 6", "QBZ-83", "AK-47"]
    },
    {
        ID: 6,
        name: "Stanag 50 RND",
        image: "Attachment54.jpg",
        type: "Magazine",
        Weapons: ["XM4", "Krig 6", "QBZ-83"]
    },
    {
        ID: 6,
        name: "SAS Mag Clamp",
        image: "Attachment83.jpg",
        type: "Magazine",
        Weapons: ["XM4", "Krig 6", "QBZ-83", "FFAR 1"]
    },
    {
        ID: 6,
        name: "Salvo 50 RND Fast Mag",
        image: "Attachment95.jpg",
        type: "Magazine",
        Weapons: ["XM4", "Krig 6", "QBZ-83"]
    },
    {
        ID: 6,
        name: "Taped Mags",
        image: "Attachment64.jpg",
        type: "Magazine",
        Weapons: ["AK-47"]
    },
    {
        ID: 6,
        name: "BakeLite 50 RND",
        image: "Attachment105.jpg",
        type: "Magazine",
        Weapons: ["AK-47"]
    },
    {
        ID: 6,
        name: "GRU Mag Clamp",
        image: "Attachment106.jpg",
        type: "Magazine",
        Weapons: ["AK-47"]
    },
    {
        ID: 6,
        name: "VDV 50 RND Fast Mag",
        image: "Attachment107.jpg",
        type: "Magazine",
        Weapons: ["AK-47"]
    },
    {
        ID: 6,
        name: "34 RND",
        image: "Attachment130.jpg",
        type: "Magazine",
        Weapons: ["FFAR 1"]
    },
    {
        ID: 6,
        name: "34 RND Speed Mag",
        image: "Attachment131.jpg",
        type: "Magazine",
        Weapons: ["FFAR 1"]
    },
    {
        ID: 6,
        name: "Stanag 44 RND",
        image: "Attachment132.jpg",
        type: "Magazine",
        Weapons: ["FFAR 1"]
    },
    {
        ID: 6,
        name: "Salvo 44 RND Fast Mag",
        image: "Attachment133.jpg",
        type: "Magazine",
        Weapons: ["FFAR 1"]
    },
    {
        ID: 7,
        name: "Speed Tape",
        image: "Attachment21.jpg",
        type: "Handle",
        Weapons: ["XM4", "Krig 6", "QBZ-83", "FFAR 1", "AK-47"]
    },
    {
        ID: 7,
        name: "Dropshot Wrap",
        image: "Attachment20.jpg",
        type: "Handle",
        Weapons: ["XM4", "Krig 6", "QBZ-83", "FFAR 1", "AK-47"]
    },
    {
        ID: 7,
        name: "Field Tape",
        image: "Attachment55.jpg",
        type: "Handle",
        Weapons: ["XM4", "Krig 6", "QBZ-83", "FFAR 1", "AK-47"]
    },
    {
        ID: 7,
        name: "SASR Jungle Grip",
        image: "Attachment56.jpg",
        type: "Handle",
        Weapons: ["XM4", "Krig 6", "QBZ-83", "FFAR 1"]
    },
    {
        ID: 7,
        name: "Serpent Wrap",
        image: "Attachment84.jpg",
        type: "Handle",
        Weapons: ["XM4", "Krig 6", "QBZ-83", "FFAR 1", "AK-47"]
    },
    {
        ID: 7,
        name: "Airborne Elastic Wrap",
        image: "Attachment96.jpg",
        type: "Handle",
        Weapons: ["XM4", "Krig 6", "QBZ-83", "FFAR 1"]
    },
    {
        ID: 7,
        name: "Spetsnaz Field Grip",
        image: "Attachment108.jpg",
        type: "Handle",
        Weapons: ["AK-47"]
    },
    {
        ID: 7,
        name: "GRU Elastic Wrap",
        image: "Attachment109.jpg",
        type: "Handle",
        Weapons: ["AK-47"]
    },
    {
        ID: 8,
        name: "Tactical Stock",
        image: "Attachment22.jpg",
        type: "Stock",
        Weapons: ["XM4", "Krig 6", "QBZ-83", "FFAR 1", "AK-47"]
    },
    {
        ID: 8,
        name: "Wire Stock",
        image: "Attachment23.jpg",
        type: "Stock",
        Weapons: ["XM4", "Krig 6", "AK-47"]
    },
    {
        ID: 8,
        name: "Duster Stock",
        image: "Attachment57.jpg",
        type: "Stock",
        Weapons: ["XM4", "Krig 6", "AK-47"]
    },
    {
        ID: 8,
        name: "Buffer Tube",
        image: "Attachment58.jpg",
        type: "Stock",
        Weapons: ["XM4"]
    },
    {
        ID: 8,
        name: "SAS Combat Stock",
        image: "Attachment85.jpg",
        type: "Stock",
        Weapons: ["XM4", "Krig 6", "FFAR 1", "QBZ-83"]
    },
    {
        ID: 8,
        name: "Raider Pad",
        image: "Attachment97.jpg",
        type: "Stock",
        Weapons: ["XM4"]
    },
    {
        ID: 8,
        name: "No Stock",
        image: "Attachment110.jpg",
        type: "Stock",
        Weapons: ["AK-47", "Krig 6"]
    },
    {
        ID: 8,
        name: "Spetsnaz PKM Stock",
        image: "Attachment111.jpg",
        type: "Stock",
        Weapons: ["AK-47"]
    },
    {
        ID: 8,
        name: "KGB Skeletal Stock",
        image: "Attachment112.jpg",
        type: "Stock",
        Weapons: ["AK-47"]
    },
    {
        ID: 8,
        name: "Raider Stock",
        image: "Attachment117.jpg",
        type: "Stock",
        Weapons: ["Krig 6", "QBZ-83", "FFAR 1"]
    },
    {
        ID: 8,
        name: "Marathon Stock",
        image: "Attachment124.jpg",
        type: "Stock",
        Weapons: ["QBZ-83", "FFAR 1"]
    },
    {
        ID: 8,
        name: "Duster Pad",
        image: "Attachment87.jpg",
        type: "Stock",
        Weapons: ["QBZ-83", "FFAR 1"]
    },
    {
        ID: 8,
        name: "CQB Pad",
        image: "Attachment75.jpg",
        type: "Stock",
        Weapons: ["QBZ-83", "FFAR 1"]
    },
    {
        ID: 9,
        name: "No Attachment",
        image: "Attachment.jpg",
        type: "none",
        Weapons: ["XM4", "Krig 6", "QBZ-83", "FFAR 1", "AK-47"]
    },
    {
        ID: 9,
        name: "No Attachment",
        image: "Attachment.jpg",
        type: "none",
        Weapons: ["XM4", "Krig 6", "QBZ-83", "FFAR 1", "AK-47"]
    }
];
//Holds attachments for Submachine guns
var SubmachineAttachments = [
    {
        ID: 1,
        name: "MillStop Reflex",
        image: "Attachment0.jpg",
        type: "Scope",
        Weapons: ["MP5", "Milano 821", "AK-74u", "KSP 45", "Bullfrog"]
    },
    {
        ID: 1,
        name: "VISIONTECH 2X",
        image: "Attachment1.jpg",
        type: "Scope",
        Weapons: ["MP5", "Milano 821", "AK-74u", "KSP 45", "Bullfrog"]
    },
    {
        ID: 1,
        name: "Kobra Red Dot",
        image: "Attachment2.jpg",
        type: "Scope",
        Weapons: ["MP5", "Milano 821", "AK-74u", "KSP 45", "Bullfrog"]
    },
    {
        ID: 1,
        name: "QuickDot LED",
        image: "Attachment3.jpg",
        type: "Scope",
        Weapons: ["MP5", "Milano 821", "AK-74u", "KSP 45", "Bullfrog"]
    },
    {
        ID: 1,
        name: "Axial Arms 3X",
        image: "Attachment4.jpg",
        type: "Scope",
        Weapons: ["MP5", "Milano 821", "AK-74u", "KSP 45", "Bullfrog"]
    },
    {
        ID: 1,
        name: "Sillix Holoscout",
        image: "Attachment43.jpg",
        type: "Scope",
        Weapons: ["MP5", "Milano 821", "AK-74u", "KSP 45", "Bullfrog"]
    },
    {
        ID: 1,
        name: "Microflex LED",
        image: "Attachment47.jpg",
        type: "Scope",
        Weapons: ["MP5", "Milano 821", "AK-74u", "KSP 45", "Bullfrog"]
    },
    {
        ID: 1,
        name: "Hawksmoor",
        image: "Attachment48.jpg",
        type: "Scope",
        Weapons: ["MP5", "Milano 821", "AK-74u", "KSP 45", "Bullfrog"]
    },
    {
        ID: 1,
        name: "Susat Multizoom",
        image: "Attachment89.jpg",
        type: "Scope",
        Weapons: ["MP5", "Milano 821", "AK-74u", "KSP 45", "Bullfrog"]
    },
    {
        ID: 1,
        name: "Diamondback Reflex",
        image: "Attachment90.jpg",
        type: "Scope",
        Weapons: ["MP5", "Milano 821", "AK-74u", "KSP 45", "Bullfrog"]
    },
    {
        ID: 1,
        name: "SnapPoint",
        image: "Attachment86.jpg",
        type: "Scope",
        Weapons: ["MP5", "Milano 821", "AK-74u", "KSP 45", "Bullfrog"]
    },
    {
        ID: 1,
        name: "Fastpoint Reflex",
        image: "Attachment165.jpg",
        type: "Scope",
        Weapons: ["MP5", "Milano 821", "AK-74u", "KSP 45", "Bullfrog"]
    },
    {
        ID: 2,
        name: "Muzzle Brake 9",
        image: "Attachment33.jpg",
        type: "Muzzle",
        Weapons: ["MP5", "Milano 821", "AK-74u", "Bullfrog"]
    },
    {
        ID: 2,
        name: "Flashguard 9",
        image: "Attachment33.jpg",
        type: "Muzzle",
        Weapons: ["MP5", "Milano 821", "AK-74u", "Bullfrog"]
    },
    {
        ID: 2,
        name: "Muzzle Brake .45 APC",
        image: "Attachment.jpg",
        type: "Muzzle",
        Weapons: ["KSP 45"]
    },
    {
        ID: 2,
        name: "Flashguard .45 APC",
        image: "Attachment.jpg",
        type: "Muzzle",
        Weapons: ["KSP 45"]
    },
    {
        ID: 2,
        name: "Sound Suppressor",
        image: "Attachment166.jpg",
        type: "Muzzle",
        Weapons: ["MP5", "Milano 821", "AK-74u", "KSP 45", "Bullfrog"]
    },
    {
        ID: 2,
        name: "Infantry Compensator",
        image: "Attachment44.jpg",
        type: "Muzzle",
        Weapons: ["MP5", "Milano 821", "KSP 45"]
    },
    {
        ID: 2,
        name: "Socom Eliminator",
        image: "Attachment49.jpg",
        type: "Muzzle",
        Weapons: ["MP5", "Milano 821", "KSP 45"]
    },
    {
        ID: 2,
        name: "Agency Suppressor",
        image: "Attachment80.jpg",
        type: "Muzzle",
        Weapons: ["MP5", "Milano 821", "KSP 45"]
    },
    {
        ID: 2,
        name: "Spetsnaz Compensator",
        image: "Attachment59.jpg",
        type: "Muzzle",
        Weapons: ["AK-74u", "Bullfrog"]
    },
    {
        ID: 2,
        name: "KGB Eliminator",
        image: "Attachment99.jpg",
        type: "Muzzle",
        Weapons: ["AK-74u", "Bullfrog"]
    },
    {
        ID: 2,
        name: "GRU Suppressor",
        image: "Attachment100.jpg",
        type: "Muzzle",
        Weapons: ["AK-74u" , "Bullfrog"]
    },
    {
        ID: 3,
        name: "9.5\" Extended",
        image: "Attachment35.jpg",
        type: "Barrel",
        Weapons: ["MP5"]
    },
    {
        ID: 3,
        name: "10.1\" Cavalry Lancer",
        image: "Attachment36.jpg",
        type: "Barrel",
        Weapons: ["MP5"]
    },
    {
        ID: 3,
        name: "9.5\" Reinforced Heavy",
        image: "Attachment76.jpg",
        type: "Barrel",
        Weapons: ["MP5"]
    },
    {
        ID: 3,
        name: "9.5\" Ranger",
        image: "Attachment162.jpg",
        type: "Barrel",
        Weapons: ["MP5"]
    },
    {
        ID: 3,
        name: "9.1\" Rifled",
        image: "Attachment163.jpg",
        type: "Barrel",
        Weapons: ["MP5"]
    },
    {
        ID: 3,
        name: "9.5\" Task Force",
        image: "Attachment164.jpg",
        type: "Barrel",
        Weapons: ["MP5"]
    },
    {
        ID: 3,
        name: "8.9\" Extended",
        image: "Attachment41.jpg",
        type: "Barrel",
        Weapons: ["Milano 821"]
    },
    {
        ID: 3,
        name: "9.5\" Calvary Lancer",
        image: "Attachment167.jpg",
        type: "Barrel",
        Weapons: ["Milano 821"]
    },
    {
        ID: 3,
        name: "10.1\" Reinforced Heavy",
        image: "Attachment168.jpg",
        type: "Barrel",
        Weapons: ["Milano 821"]
    },
    {
        ID: 3,
        name: "10.5\" Ranger",
        image: "Attachment169.jpg",
        type: "Barrel",
        Weapons: ["Milano 821"]
    },
    {
        ID: 3,
        name: "9.5\" Rifled",
        image: "Attachment170.jpg",
        type: "Barrel",
        Weapons: ["Milano 821"]
    },
    {
        ID: 3,
        name: "10.6\" Task Force",
        image: "Attachment171.jpg",
        type: "Barrel",
        Weapons: ["Milano 821"]
    },
    {
        ID: 3,
        name: "9.3\" Extended",
        image: "Attachment42.jpg",
        type: "Barrel",
        Weapons: ["AK-74u"]
    },
    {
        ID: 3,
        name: "8.4\" Cavalry Lancer",
        image: "Attachment174.jpg",
        type: "Barrel",
        Weapons: ["AK-74u"]
    },
    {
        ID: 3,
        name: "9.3\" VDV Reinforced",
        image: "Attachment175.jpg",
        type: "Barrel",
        Weapons: ["AK-74u"]
    },
    {
        ID: 3,
        name: "10.3\" Liberator",
        image: "Attachment176.jpg",
        type: "Barrel",
        Weapons: ["AK-74u"]
    },
    {
        ID: 3,
        name: "8.4\" Rifled",
        image: "Attachment177.jpg",
        type: "Barrel",
        Weapons: ["AK-74u"]
    },
    {
        ID: 3,
        name: "10.3\" Task Force",
        image: "Attachment178.jpg",
        type: "Barrel",
        Weapons: ["AK-74u"]
    },
    {
        ID: 3,
        name: "8.9\" Extended",
        image: "Attachment185.jpg",
        type: "Barrel",
        Weapons: ["KSP 45"]
    },
    {
        ID: 3,
        name: "9.6\" Cavalry Lancer",
        image: "Attachment186.jpg",
        type: "Barrel",
        Weapons: ["KSP 45"]
    },
    {
        ID: 3,
        name: "10.5\" Reinforced Heavy",
        image: "Attachment187.jpg",
        type: "Barrel",
        Weapons: ["KSP 45"]
    },
    {
        ID: 3,
        name: "9.5\" Ranger",
        image: "Attachment188.jpg",
        type: "Barrel",
        Weapons: ["KSP 45"]
    },
    {
        ID: 3,
        name: "10.2\" Rifled",
        image: "Attachment189.jpg",
        type: "Barrel",
        Weapons: ["KSP 45"]
    },
    {
        ID: 3,
        name: "10.5\" Task Force",
        image: "Attachment190.jpg",
        type: "Barrel",
        Weapons: ["KSP 45"]
    },
    {
        ID: 3,
        name: "7.1\" Extended",
        image: "Attachment179.jpg",
        type: "Barrel",
        Weapons: ["Bullfrog"]
    },
    {
        ID: 3,
        name: "7\" Cavalry Lancer",
        image: "Attachment180.jpg",
        type: "Barrel",
        Weapons: ["Bullfrog"]
    },
    {
        ID: 3,
        name: "6.7\" VDV Reinforced",
        image: "Attachment181.jpg",
        type: "Barrel",
        Weapons: ["Bullfrog"]
    },
    {
        ID: 3,
        name: "8.1\" Liberator",
        image: "Attachment182.jpg",
        type: "Barrel",
        Weapons: ["Bullfrog"]
    },
    {
        ID: 3,
        name: "7.6\" Rifled",
        image: "Attachment183.jpg",
        type: "Barrel",
        Weapons: ["Bullfrog"]
    },
    {
        ID: 3,
        name: "7.4\" Task Force",
        image: "Attachment184.jpg",
        type: "Barrel",
        Weapons: ["Bullfrog"]
    },
    {
        ID: 4,
        name: "Steady Aim Laser",
        image: "Attachment12.jpg",
        type: "Body",
        Weapons: ["MP5", "Milano 821", "AK-74u", "Bullfrog", "KSP 45"]
    },
    {
        ID: 4,
        name: "Mounted Flashlight",
        image: "Attachment11.jpg",
        type: "Body",
        Weapons: ["MP5", "Milano 821", "AK-74u", "Bullfrog", "KSP 45"]
    },
    {
        ID: 4,
        name: "Sof Target Designator",
        image: "Attachment13.jpg",
        type: "Body",
        Weapons: ["MP5", "Milano 821", "KSP 45"]
    },
    {
        ID: 4,
        name: "Swat 5MW Laser Sight",
        image: "Attachment52.jpg",
        type: "Body",
        Weapons: ["MP5", "Milano 821", "KSP 45"]
    },
    {
        ID: 4,
        name: "Tiger Team Spotlight",
        image: "Attachment81.jpg",
        type: "Body",
        Weapons: ["MP5", "Milano 821", "AK-74u", "Bullfrog", "KSP 45"]
    },
    {
        ID: 4,
        name: "Ember Sighting Point",
        image: "Attachment93.jpg",
        type: "Body",
        Weapons: ["MP5", "Milano 821", "AK-74u", "Bullfrog", "KSP 45"]
    },
    {
        ID: 4,
        name: "KGB Target Designator",
        image: "Attachment62.jpg",
        type: "Body",
        Weapons: ["AK-74u", "Bullfrog"]
    },
    {
        ID: 4,
        name: "GRU 5 MW Laser Sight",
        image: "Attachment63.jpg",
        type: "Body",
        Weapons: ["AK-74u", "Bullfrog"]
    },
    {
        ID: 5,
        name: "Foregrip",
        image: "Attachment14.jpg",
        type: "UnderBarrel",
        Weapons: ["MP5", "Milano 821", "AK-74u", "Bullfrog"]
    },
    {
        ID: 5,
        name: "Front Grip",
        image: "Attachment72.jpg",
        type: "UnderBarrel",
        Weapons: ["KSP 45"]
    },
    {
        ID: 5,
        name: "Red Cell Foregrip",
        image: "Attachment77.jpg",
        type: "UnderBarrel",
        Weapons: ["MP5", "Milano 821", "AK-74u", "Bullfrog", "KSP 45"]
    },
    {
        ID: 5,
        name: "Patrol Grip",
        image: "Attachment16.jpg",
        type: "UnderBarrel",
        Weapons: ["MP5", "Milano 821", "AK-74u", "Bullfrog", "KSP 45"]
    },
    {
        ID: 5,
        name: "Bruiser Grip",
        image: "Attachment53.jpg",
        type: "UnderBarrel",
        Weapons: ["MP5", "Milano 821", "AK-74u", "Bullfrog", "KSP 45"]
    },
    {
        ID: 5,
        name: "Field Agent Grip",
        image: "Attachment82.jpg",
        type: "UnderBarrel",
        Weapons: ["MP5", "Milano 821", "KSP 45"]
    },
    {
        ID: 5,
        name: "SFOD Speed Grip",
        image: "Attachment94.jpg",
        type: "UnderBarrel",
        Weapons: ["MP5", "Milano 821", "KSP 45"]
    },
    {
        ID: 5,
        name: "Spetsnaz Grip",
        image: "Attachment103.jpg",
        type: "UnderBarrel",
        Weapons: ["AK-74u", "Bullfrog"]
    },
    {
        ID: 5,
        name: "Spetsnaz Speed Grip",
        image: "Attachment104.jpg",
        type: "UnderBarrel",
        Weapons: ["AK-74u"]
    },
    {
        ID: 5,
        name: "VDV Speed Grip",
        image: "Attachment191.jpg",
        type: "UnderBarrel",
        Weapons: ["Bullfrog"]
    },
    {
        ID: 6,
        name: "40 RND Drum",
        image: "Attachment37.jpg",
        type: "Magazine",
        Weapons: ["MP5", "AK-74u"]
    },
    {
        ID: 6,
        name: "Jungle-Style Mag",
        image: "Attachment38.jpg",
        type: "Magazine",
        Weapons: ["MP5"]
    },
    {
        ID: 6,
        name: "40 RND Speed Mag",
        image: "Attachment19.jpg",
        type: "Magazine",
        Weapons: ["MP5", "AK-74u"]
    },
    {
        ID: 6,
        name: "Stanag 50 RND Drum",
        image: "Attachment160.jpg",
        type: "Magazine",
        Weapons: ["MP5"]
    },
    {
        ID: 6,
        name: "SAS Mag Clamp",
        image: "Attachment83.jpg",
        type: "Magazine",
        Weapons: ["MP5"]
    },
    {
        ID: 6,
        name: "Salvo 40 RND Fast Mag",
        image: "Attachment161.jpg",
        type: "Magazine",
        Weapons: ["MP5"]
    },
    {
        ID: 6,
        name: "45 RND Drum",
        image: "Attachment172.jpg",
        type: "Magazine",
        Weapons: ["Milano 821"]
    },
    {
        ID: 6,
        name: "Fast Mag",
        image: "Attachment153.jpg",
        type: "Magazine",
        Weapons: ["Milano 821", "KSP 45", "Bullfrog"]
    },
    {
        ID: 6,
        name: "45 RND Speed Mag",
        image: "Attachment173.jpg",
        type: "Magazine",
        Weapons: ["Milano 821"]
    },
    {
        ID: 6,
        name: "Stanag 55 RND Drum",
        image: "Attachment174.jpg",
        type: "Magazine",
        Weapons: ["Milano 821"]
    },
    {
        ID: 6,
        name: "Vandal Speed Loader",
        image: "Attachment145.jpg",
        type: "Magazine",
        Weapons: ["Milano 821", "KSP 45"]
    },
    {
        ID: 6,
        name: "Salvo 55 RND Fast Mag",
        image: "Attachment192.jpg",
        type: "Magazine",
        Weapons: ["Milano 821"]
    },
    {
        ID: 6,
        name: "Taped Mags",
        image: "Attachment64.jpg",
        type: "Magazine",
        Weapons: ["AK-74u"]
    },
    {
        ID: 6,
        name: "Spetsnaz 50 RND Drum",
        image: "Attachment193.jpg",
        type: "Magazine",
        Weapons: ["AK-74u"]
    },
    {
        ID: 6,
        name: "GRU Mag Clamp",
        image: "Attachment106.jpg",
        type: "Magazine",
        Weapons: ["AK-74u"]
    },
    {
        ID: 6,
        name: "VDV 50 RND Fast Mag",
        image: "Attachment107.jpg",
        type: "Magazine",
        Weapons: ["AK-74u"]
    },
    {
        ID: 6,
        name: "42 RND",
        image: "Attachment194.jpg",
        type: "Magazine",
        Weapons: ["KSP 45"]
    },
    {
        ID: 6,
        name: "42 RND Speed Mag",
        image: "Attachment195.jpg",
        type: "Magazine",
        Weapons: ["KSP 45"]
    },
    {
        ID: 6,
        name: "Stanag 48 RND",
        image: "Attachment196.jpg",
        type: "Magazine",
        Weapons: ["KSP 45"]
    },
    {
        ID: 6,
        name: "Salvo 48 RND Fast Mag",
        image: "Attachment197.jpg",
        type: "Magazine",
        Weapons: ["KSP 45"]
    },
    {
        ID: 6,
        name: "65 RND",
        image: "Attachment.jpg",
        type: "Magazine",
        Weapons: ["Bullfrog"]
    },
    {
        ID: 6,
        name: "65 RND Speed Mag",
        image: "Attachment.jpg",
        type: "Magazine",
        Weapons: ["Bullfrog"]
    },
    {
        ID: 6,
        name: "Stanag 85 RND",
        image: "Attachment.jpg",
        type: "Magazine",
        Weapons: ["Bullfrog"]
    },
    {
        ID: 6,
        name: "VDV 85 RND Fast Mag",
        image: "Attachment.jpg",
        type: "Magazine",
        Weapons: ["Bullfrog"]
    },
    {
        ID: 7,
        name: "Speed Tape",
        image: "Attachment39.jpg",
        type: "Handle",
        Weapons: ["MP5", "Milano 821", "AK-74u", "KSP 45", "Bullfrog"]
    },
    {
        ID: 7,
        name: "Dropshot Wrap",
        image: "Attachment20.jpg",
        type: "Handle",
        Weapons: ["MP5", "Milano 821", "AK-74u", "KSP 45", "Bullfrog"]
    },
    {
        ID: 7,
        name: "Field Tape",
        image: "Attachment55.jpg",
        type: "Handle",
        Weapons: ["MP5", "Milano 821", "AK-74u", "KSP 45", "Bullfrog"]
    },
    {
        ID: 7,
        name: "SASR Jungle Grip",
        image: "Attachment56.jpg",
        type: "Handle",
        Weapons: ["MP5", "Milano 821", "KSP 45"]
    },
    {
        ID: 7,
        name: "Serpent Grip",
        image: "Attachment.jpg",
        type: "Handle",
        Weapons: ["MP5", "Milano 821", "KSP 45"]
    },
    {
        ID: 7,
        name: "Airborne Elastic Wrap",
        image: "Attachment96.jpg",
        type: "Handle",
        Weapons: ["MP5", "Milano 821", "KSP 45"]
    },
    {
        ID: 7,
        name: "Spetsnaz Field Grip",
        image: "Attachment108.jpg",
        type: "Handle",
        Weapons: ["AK-74u", "Bullfrog"]
    },
    {
        ID: 7,
        name: "Serpent Wrap",
        image: "Attachment84.jpg",
        type: "Handle",
        Weapons: ["AK-74u", "KSP 45", "Bullfrog"]
    },
    {
        ID: 7,
        name: "GRU Elastic Wrap",
        image: "Attachment109.jpg",
        type: "Handle",
        Weapons: ["AK-74u", "Bullfrog"]
    },
    {
        ID: 8,
        name: "Tactical Stock",
        image: "Attachment22.jpg",
        type: "Stock",
        Weapons: ["MP5", "Milano 821", "AK-74u", "KSP 45", "Bullfrog"]
    },
    {
        ID: 8,
        name: "Collapsed Stock",
        image: "Attachment78.jpg",
        type: "Stock",
        Weapons: ["MP5"]
    },
    {
        ID: 8,
        name: "Wire Stock",
        image: "Attachment23.jpg",
        type: "Stock",
        Weapons: ["Milano 821", "AK-74u", "KSP 45", "Bullfrog"]
    },
    {
        ID: 8,
        name: "Duster Stock",
        image: "Attachment57.jpg",
        type: "Stock",
        Weapons: ["MP5", "Milano 821", "AK-74u", "KSP 45", "Bullfrog"]
    },
    {
        ID: 8,
        name: "No Stock",
        image: "Attachment110.jpg",
        type: "Stock",
        Weapons: ["MP5", "AK-74u", "KSP 45", "Bullfrog"]
    },
    {
        ID: 8,
        name: "Marathon Stock",
        image: "Attachment124.jpg",
        type: "Stock",
        Weapons: ["Milano 821"]
    },
    {
        ID: 8,
        name: "SAS Combat Stock",
        image: "Attachment85.jpg",
        type: "Stock",
        Weapons: ["MP5", "Milano 821", "KSP 45"]
    },
    {
        ID: 8,
        name: "Spetsnaz PKM Stock",
        image: "Attachment111.jpg",
        type: "Stock",
        Weapons: ["AK-74u", "Bullfrog"]
    },
    {
        ID: 8,
        name: "Raider Stock",
        image: "Attachment117.jpg",
        type: "Stock",
        Weapons: ["MP5", "Milano 821", "KSP 45"]
    },
    {
        ID: 8,
        name: "KGB Skeletal Stock",
        image: "Attachment112.jpg",
        type: "Stock",
        Weapons: ["AK-74u", "Bullfrog"]
    },
    {
        ID: 9,
        name: "No Attachment",
        image: "Attachment.jpg",
        type: "none",
        Weapons: ["MP5", "Milano 821", "AK-74u", "KSP 45", "Bullfrog"]
    },
    {
        ID: 9,
        name: "No Attachment",
        image: "Attachment.jpg",
        type: "none",
        Weapons: ["MP5", "Milano 821", "AK-74u", "KSP 45", "Bullfrog"]
    }
];
//Holds attachments for Tactical Rifles
var TacticalAttachments =[
    {
        ID: 1,
        name: "Visiontech 2X",
        type: "Scope",
        Weapons: ["Type63", "AUG", "M16", "DMR14"]
    },
    {
        ID: 1,
        name: "Kobra Red Dot",
        type: "Scope",
        Weapons: ["Type63", "AUG", "M16", "DMR14"]
    },
    {
        ID: 1,
        name: "Axial Arms 3X",
        type: "Scope",
        Weapons: ["Type63", "AUG", "M16", "DMR14"]
    },
    {
        ID: 1,
        name: "Millstop Reflex",
        type: "Scope",
        Weapons: ["Type63", "AUG", "M16", "DMR14"]
    },
    {
        ID: 1,
        name: "Royal & Kross 4X",
        type: "Scope",
        Weapons: ["Type63", "AUG", "M16", "DMR14"]
    },
    {
        ID: 1,
        name: "Quickdot LED",
        type: "Scope",
        Weapons: ["Type63", "AUG", "M16", "DMR14"]
    },
    {
        ID: 1,
        name: "Hawksmoor",
        type: "Scope",
        Weapons: ["Type63", "AUG", "M16", "DMR14"]
    },
    {
        ID: 1,
        name: "Sillix Holoscout",
        type: "Scope",
        Weapons: ["Type63", "AUG", "M16", "DMR14"]
    },
    {
        ID: 1,
        name: "SUSAT Multizoom",
        type: "Scope",
        Weapons: ["Type63", "AUG", "M16", "DMR14"]
    },
    {
        ID: 1,
        name: "Hangman RF",
        type: "Scope",
        Weapons: ["Type63", "AUG", "M16", "DMR14"]
    },
    {
        ID: 1,
        name: "Vulture Custom Zoom",
        type: "Scope",
        Weapons: ["Type63", "AUG", "M16", "DMR14"]
    },
    {
        ID: 1,
        name: "Noch Sova Thermal",
        type: "Scope",
        Weapons: ["Type63"]
    },
    {
        ID: 1,
        name: "AN/PVS-4 Thermal",
        type: "Scope",
        Weapons: ["AUG", "M16", "DMR14"]
    },
    {
        ID: 2,
        name: "Muzzle Brake 7.62",
        type: "Muzzle",
        Weapons: ["Type63", "DMR14"]
    },
    {
        ID: 2,
        name: "Flashguard 7.62",
        type: "Muzzle",
        Weapons: ["Type63", "DMR14"]
    },
    {
        ID: 2,
        name: "Muzzle Brake 5.56",
        type: "Muzzle",
        Weapons: ["AUG", "M16"]
    },
    {
        ID: 2,
        name: "Flashguard 5.56",
        type: "Muzzle",
        Weapons: ["AUG", "M16"]
    },
    {
        ID: 2,
        name: "Silencer",
        type: "Muzzle",
        Weapons: ["Type63", "AUG", "M16", "DMR14"]
    },
    {
        ID: 2,
        name: "Spetsnaz Compensator",
        type: "Muzzle",
        Weapons: ["Type63"]
    },
    {
        ID: 2,
        name: "KGB Eliminator",
        type: "Muzzle",
        Weapons: ["Type63"]
    },
    {
        ID: 2,
        name: "GRU Silencer",
        type: "Muzzle",
        Weapons: ["Type63"]
    },
    {
        ID: 2,
        name: "Infantry Compensator",
        type: "Muzzle",
        Weapons: ["AUG", "M16", "DMR14"]
    },
    {
        ID: 2,
        name: "SOCOM Eliminator",
        type: "Muzzle",
        Weapons: ["AUG", "M16", "DMR14"]
    },
    {
        ID: 2,
        name: "Agency Silencer",
        type: "Muzzle",
        Weapons: ["AUG", "M16", "DMR14"]
    },
    {
        ID: 3,
        name: "16.4\" Rapid Fire",
        type: "Barrel",
        Weapons: ["Type63"]
    },
    {
        ID: 3,
        name: "18.3\" Cavalry Lancer",
        type: "Barrel",
        Weapons: ["Type63"]
    },
    {
        ID: 3,
        name: "18.3\" Strike Team",
        type: "Barrel",
        Weapons: ["Type63"]
    },
    {
        ID: 3,
        name: "16.4\" Titanium",
        type: "Barrel",
        Weapons: ["Type63"]
    },
    {
        ID: 3,
        name: "21.5\" Match Grade",
        type: "Barrel",
        Weapons: ["Type63"]
    },
    {
        ID: 3,
        name: "21.5\" Task Force",
        type: "Barrel",
        Weapons: ["Type63"]
    },
    {
        ID: 3,
        name: "16.3\" Rapid Fire",
        type: "Barrel",
        Weapons: ["M16"]
    },
    {
        ID: 3,
        name: "15.9\" Cavalry Lancer",
        type: "Barrel",
        Weapons: ["M16"]
    },
    {
        ID: 3,
        name: "15.9\" Strike Team",
        type: "Barrel",
        Weapons: ["M16"]
    },
    {
        ID: 3,
        name: "16.4\" Titanium",
        type: "Barrel",
        Weapons: ["M16"]
    },
    {
        ID: 3,
        name: "20.5\" Match Grade",
        type: "Barrel",
        Weapons: ["M16"]
    },
    {
        ID: 3,
        name: "20.5\" Task Force",
        type: "Barrel",
        Weapons: ["M16"]
    },
    {
        ID: 3,
        name: "18\" Rapid Fire",
        type: "Barrel",
        Weapons: ["AUG"]
    },
    {
        ID: 3,
        name: "17.9\" Cavalry Lancer",
        type: "Barrel",
        Weapons: ["AUG"]
    },
    {
        ID: 3,
        name: "18.2\" Strike Team",
        type: "Barrel",
        Weapons: ["AUG"]
    },
    {
        ID: 3,
        name: "17\" Titanium",
        type: "Barrel",
        Weapons: ["AUG"]
    },
    {
        ID: 3,
        name: "19.6\" Match Grade",
        type: "Barrel",
        Weapons: ["AUG"]
    },
    {
        ID: 3,
        name: "19.8\" Task Force",
        type: "Barrel",
        Weapons: ["AUG"]
    },
    {
        ID: 3,
        name: "17\" Rapid Fire",
        type: "Barrel",
        Weapons: ["DMR14"]
    },
    {
        ID: 3,
        name: "17.1\" Cavalry Lancer",
        type: "Barrel",
        Weapons: ["DMR14"]
    },
    {
        ID: 3,
        name: "17.1\" Strike Team",
        type: "Barrel",
        Weapons: ["DMR14"]
    },
    {
        ID: 3,
        name: "16.3\" Titanium",
        type: "Barrel",
        Weapons: ["DMR14"]
    },
    {
        ID: 3,
        name: "20.8\" Match Grade",
        type: "Barrel",
        Weapons: ["DMR14"]
    },
    {
        ID: 3,
        name: "20.8\" Task Force",
        type: "Barrel",
        Weapons: ["DMR14"]
    },
    {
        ID: 4,
        name: "Steady Aim Laser",
        type: "Body",
        Weapons: ["Type63", "AUG", "M16", "DMR14"]
    },
    {
        ID: 4,
        name: "Mounted Flashlight",
        type: "Body",
        Weapons: ["Type63", "AUG", "M16", "DMR14"]
    },
    {
        ID: 4,
        name: "KGB Target Designator",
        type: "Body",
        Weapons: ["Type63"]
    },
    {
        ID: 4,
        name: "GRU 5mw Laser Sight",
        type: "Body",
        Weapons: ["Type63"]
    },
    {
        ID: 4,
        name: "SOF Target Designator",
        type: "Body",
        Weapons: ["AUG", "M16", "DMR14"]
    },
    {
        ID: 4,
        name: "Swat 5mw Laser Sight",
        type: "Body",
        Weapons: ["AUG", "M16", "DMR14"]
    },
    {
        ID: 4,
        name: "Tiger Team Spotlight",
        type: "Body",
        Weapons: ["Type63", "AUG", "M16", "DMR14"]
    },
    {
        ID: 4,
        name: "Ember Sighting Point",
        type: "Body",
        Weapons: ["Type63", "AUG", "M16", "DMR14"]
    },
    {
        ID: 5,
        name: "Front Grip",
        type: "Underbarrel",
        Weapons: ["Type63", "AUG", "M16", "DMR14"]
    },
    {
        ID: 5,
        name: "Infiltrator Grip",
        type: "Underbarrel",
        Weapons: ["Type63", "AUG", "M16", "DMR14"]
    },
    {
        ID: 5,
        name: "Patrol Grip",
        type: "Underbarrel",
        Weapons: ["Type63", "AUG", "M16", "DMR14"]
    },
    {
        ID: 5,
        name: "Bruiser Grip",
        type: "Underbarrel",
        Weapons: ["Type63", "AUG", "M16", "DMR14"]
    },
    {
        ID: 5,
        name: "Spetsnaz Ergonomic Grip",
        type: "Underbarrel",
        Weapons: ["Type63"]
    },
    {
        ID: 5,
        name: "Spetsnaz Speed Grip",
        type: "Underbarrel",
        Weapons: ["Type63"]
    },
    {
        ID: 5,
        name: "Field Agent Grip",
        type: "Underbarrel",
        Weapons: ["AUG", "M16", "DMR14"]
    },
    {
        ID: 5,
        name: "SFOD Speed Grip",
        type: "Underbarrel",
        Weapons: ["AUG", "M16", "DMR14"]
    },
    {
        ID: 6,
        name: "30 RND",
        type: "Magazine",
        Weapons: ["Type63", "DMR14"]
    },
    {
        ID: 6,
        name: "Taped Mags",
        type: "Magazine",
        Weapons: ["Type63"]
    },
    {
        ID: 6,
        name: "30 RND Speed Mag",
        type: "Magazine",
        Weapons: ["Type63", "DMR14"]
    },
    {
        ID: 6,
        name: "Bakelite 35 RND",
        type: "Magazine",
        Weapons: ["Type63"]
    },
    {
        ID: 6,
        name: "GRU Mag Clamp",
        type: "Magazine",
        Weapons: ["Type63"]
    },
    {
        ID: 6,
        name: "VDV 35 RND Fast Mag",
        type: "Magazine",
        Weapons: ["Type63"]
    },
    {
        ID: 6,
        name: "45 RND",
        type: "Magazine",
        Weapons: ["M16"]
    },
    {
        ID: 6,
        name: "Jungle-Style Mag",
        type: "Magazine",
        Weapons: ["M16", "AUG", "DMR14"]
    },
    {
        ID: 6,
        name: "45 RND Speed Mag",
        type: "Magazine",
        Weapons: ["M16", "AUG"]
    },
    {
        ID: 6,
        name: "Stanag 54 RND",
        type: "Magazine",
        Weapons: ["M16", "AUG"]
    },
    {
        ID: 6,
        name: "SAS Mag Clamp",
        type: "Magazine",
        Weapons: ["M16", "AUG", "DMR14"]
    },
    {
        ID: 6,
        name: "Salvo 54 RND Fast Mag",
        type: "Magazine",
        Weapons: ["M16", "AUG"]
    },
    {
        ID: 6,
        name: "45 RND Drum",
        type: "Magazine",
        Weapons: ["AUG"]
    },
    {
        ID: 6,
        name: "Stanag 35 RND",
        type: "Magazine",
        Weapons: ["Type63", "DMR14"]
    },
    {
        ID: 6,
        name: "Salvo 35 RND Fast Mag",
        type: "Magazine",
        Weapons: ["Type63", "DMR14"]
    },
    {
        ID: 7,
        name: "Speed Tape",
        type: "Handle",
        Weapons: ["Type63", "AUG", "M16", "DMR14"]
    },
    {
        ID: 7,
        name: "Dropshot Wrap",
        type: "Handle",
        Weapons: ["Type63", "AUG", "M16", "DMR14"]
    },
    {
        ID: 7,
        name: "Field Tape",
        type: "Handle",
        Weapons: ["Type63", "AUG", "M16", "DMR14"]
    },
    {
        ID: 7,
        name: "SASR Jungle Grip",
        type: "Handle",
        Weapons: ["AUG", "M16", "DMR14"]
    },
    {
        ID: 7,
        name: "Spetsnaz Field Grip",
        type: "Handle",
        Weapons: ["Type63"]
    },
    {
        ID: 7,
        name: "Serpent Wrap",
        type: "Handle",
        Weapons: ["Type63", "AUG", "M16", "DMR14"]
    },
    {
        ID: 7,
        name: "GRU Elastic Wrap",
        type: "Handle",
        Weapons: ["Type63"]
    },
    {
        ID: 7,
        name: "Airborne Elastic Wrap",
        type: "Handle",
        Weapons: ["AUG", "M16", "DMR14"]
    },
    {
        ID: 8,
        name: "Tactical Stock",
        type: "Stock",
        Weapons: ["Type63", "AUG", "M16", "DMR14"]
    },
    {
        ID: 8,
        name: "Wire Stock",
        type: "Stock",
        Weapons: ["Type63", "DMR14"]
    },
    {
        ID: 8,
        name: "Duster Pad",
        type: "Stock",
        Weapons: ["Type63", "AUG", "DMR14"]
    },
    {
        ID: 8,
        name: "Duster Stock",
        type: "Stock",
        Weapons: ["M16"]
    },
    {
        ID: 8,
        name: "Buffer Tube",
        type: "Stock",
        Weapons: ["M16"]
    },
    {
        ID: 8,
        name: "SAS Combat Stock",
        type: "Stock",
        Weapons: ["AUG", "M16", "DMR14"]
    },
    {
        ID: 8,
        name: "Raider Pad",
        type: "Stock",
        Weapons: ["AUG", "M16"]
    },
    {
        ID: 8,
        name: "No Stock",
        type: "Stock",
        Weapons: ["Type63", "DMR14"]
    },
    {
        ID: 8,
        name: "Spetsnaz PKM Stock",
        type: "Stock",
        Weapons: ["Type63"]
    },
    {
        ID: 8,
        name: "KGB Pad",
        type: "Stock",
        Weapons: ["Type63"]
    },
    {
        ID: 8,
        name: "Marathon Stock",
        type: "Stock",
        Weapons: ["AUG"]
    },
    {
        ID: 8,
        name: "CQB Pad",
        type: "Stock",
        Weapons: ["AUG"]
    },
    {
        ID: 8,
        name: "Raider Stock",
        type: "Stock",
        Weapons: ["Type63", "DMR14"]
    },
    {
        ID: 9,
        name: "No Attachment",
        type: "Stock",
        Weapons: ["Type63", "DMR14", "AUG", "M16"]
    },
    {
        ID: 9,
        name: "No Attachment",
        type: "Stock",
        Weapons: ["Type63", "DMR14", "AUG", "M16"]
    }
];
//Holds attachments for LMG
var LMGAttachments = [
    {
        ID: 1,
        name: "Kobra Red Dot",
        type: "Scope",
        Weapons: ["Stoner 63", "RPD", "M60"]
    },
    {
        ID: 1,
        name: "Axial Arms 3X",
        type: "Scope",
        Weapons: ["Stoner 63", "RPD", "M60"]
    },
    {
        ID: 1,
        name: "Visiontech 2X",
        type: "Scope",
        Weapons: ["Stoner 63", "RPD", "M60"]
    },
    {
        ID: 1,
        name: "Millstop Reflex",
        type: "Scope",
        Weapons: ["Stoner 63", "RPD", "M60"]
    },
    {
        ID: 1,
        name: "Sillix Holoscout",
        type: "Scope",
        Weapons: ["Stoner 63", "RPD", "M60"]
    },
    {
        ID: 1,
        name: "Royal & Kross 4X",
        type: "Scope",
        Weapons: ["Stoner 63", "RPD", "M60"]
    },
    {
        ID: 1,
        name: "SUSAT Multizoom",
        type: "Scope",
        Weapons: ["Stoner 63", "RPD", "M60"]
    },
    {
        ID: 1,
        name: "Quickdot LED",
        type: "Scope",
        Weapons: ["Stoner 63", "RPD", "M60"]
    },
    {
        ID: 1,
        name: "Hawksmoor",
        type: "Scope",
        Weapons: ["Stoner 63", "RPD", "M60"]
    },
    {
        ID: 1,
        name: "Hangman RF",
        type: "Scope",
        Weapons: ["Stoner 63", "RPD", "M60"]
    },
    {
        ID: 1,
        name: "Vulture Custom Zoom",
        type: "Scope",
        Weapons: ["Stoner 63", "RPD", "M60"]
    },
    {
        ID: 1,
        name: "AN/PVS-4 Thermal",
        type: "Scope",
        Weapons: ["Stoner 63", "M60"]
    },
    {
        ID: 1,
        name: "Noch Sova Thermal",
        type: "Scope",
        Weapons: ["RPD"]
    },
    {
        ID: 2,
        name: "Muzzle Brake 5.56",
        type: "Muzzle",
        Weapons: ["Stoner 63"]
    },
    {
        ID: 2,
        name: "Flashguard 5.56",
        type: "Muzzle",
        Weapons: ["Stoner 63"]
    },
    {
        ID: 2,
        name: "Muzzle Brake 7.62",
        type: "Muzzle",
        Weapons: ["RPD", "M60"]
    },
    {
        ID: 2,
        name: "Flashguard 7.62",
        type: "Muzzle",
        Weapons: ["RPD", "M60"]
    },
    {
        ID: 2,
        name: "Suppressor",
        type: "Muzzle",
        Weapons: ["RPD", "M60", "Stoner 63"]
    },
    {
        ID: 2,
        name: "Infantry Compensator",
        type: "Muzzle",
        Weapons: ["M60", "Stoner 63"]
    },
    {
        ID: 2,
        name: "SOCOM Eliminator",
        type: "Muzzle",
        Weapons: ["M60", "Stoner 63"]
    },
    {
        ID: 2,
        name: "Agency Suppressor",
        type: "Muzzle",
        Weapons: ["M60", "Stoner 63"]
    },
    {
        ID: 2,
        name: "Spetsnaz Compensator",
        type: "Muzzle",
        Weapons: ["RPD"]
    },
    {
        ID: 2,
        name: "KGB Eliminator",
        type: "Muzzle",
        Weapons: ["RPD"]
    },
    {
        ID: 2,
        name: "GRU Suppressor",
        type: "Muzzle",
        Weapons: ["RPD"]
    },
    {
        ID: 3,
        name: "16\" Cut Down",
        type: "Barrel",
        Weapons: ["Stoner 63"]
    },
    {
        ID: 3,
        name: "17.8\" Cavalry Lancer",
        type: "Barrel",
        Weapons: ["Stoner 63"]
    },
    {
        ID: 3,
        name: "18.6\" Division",
        type: "Barrel",
        Weapons: ["Stoner 63"]
    },
    {
        ID: 3,
        name: "16\" SOR Cut Down",
        type: "Barrel",
        Weapons: ["Stoner 63"]
    },
    {
        ID: 3,
        name: "20.7\" Match Grade",
        type: "Barrel",
        Weapons: ["Stoner 63"]
    },
    {
        ID: 3,
        name: "21.8\" Task Force",
        type: "Barrel",
        Weapons: ["Stoner 63"]
    },
    {
        ID: 3,
        name: "16.5\" Cut Down",
        type: "Barrel",
        Weapons: ["RPD"]
    },
    {
        ID: 3,
        name: "16.5\" Spetsnaz RPK Barrel",
        type: "Barrel",
        Weapons: ["RPD"]
    },
    {
        ID: 3,
        name: "16.5\" Division",
        type: "Barrel",
        Weapons: ["RPD"]
    },
    {
        ID: 3,
        name: "14.7\" GRU Cut Down",
        type: "Barrel",
        Weapons: ["RPD"]
    },
    {
        ID: 3,
        name: "20.3\" Match Grade",
        type: "Barrel",
        Weapons: ["RPD"]
    },
    {
        ID: 3,
        name: "20.3\" Task Force",
        type: "Barrel",
        Weapons: ["RPD"]
    },
    {
        ID: 3,
        name: "18\" Cut Down",
        type: "Barrel",
        Weapons: ["M60"]
    },
    {
        ID: 3,
        name: "18.9\" Cavalry Lancer",
        type: "Barrel",
        Weapons: ["M60"]
    },
    {
        ID: 3,
        name: "18.9\" Divison",
        type: "Barrel",
        Weapons: ["M60"]
    },
    {
        ID: 3,
        name: "17.5\" SOR Cut Down",
        type: "Barrel",
        Weapons: ["M60"]
    },
    {
        ID: 3,
        name: "22.8\" Match Grade",
        type: "Barrel",
        Weapons: ["M60"]
    },
    {
        ID: 3,
        name: "22.8\" Task Force",
        type: "Barrel",
        Weapons: ["M60"]
    },
    {
        ID: 4,
        name: "Steady Aim Laser",
        type: "Body",
        Weapons: ["RPD", "M60", "Stoner 63"]
    },
    {
        ID: 4,
        name: "Mounted Flashlight",
        type: "Body",
        Weapons: ["RPD", "M60", "Stoner 63"]
    },
    {
        ID: 4,
        name: "SOF Target Designator",
        type: "Body",
        Weapons: ["M60", "Stoner 63"]
    },
    {
        ID: 4,
        name: "Swat 5mw Laser Sight",
        type: "Body",
        Weapons: ["M60", "Stoner 63"]
    },
    {
        ID: 4,
        name: "Tiger Team Spotlight",
        type: "Body",
        Weapons: ["RPD", "M60", "Stoner 63"]
    },
    {
        ID: 4,
        name: "Ember Sighting Point",
        type: "Body",
        Weapons: ["RPD", "M60", "Stoner 63"]
    },
    {
        ID: 4,
        name: "GRU 5mw Laser Sight",
        type: "Body",
        Weapons: ["RPD"]
    },
    {
        ID: 4,
        name: "KGB Target Designator",
        type: "Body",
        Weapons: ["RPD"]
    },
    {
        ID: 5,
        name: "Foregrip",
        type: "Underbarrel",
        Weapons: ["RPD", "M60", "Stoner 63"]
    },
    {
        ID: 5,
        name: "Infiltrator Grip",
        type: "Underbarrel",
        Weapons: ["RPD", "M60", "Stoner 63"]
    },
    {
        ID: 5,
        name: "Patrol Grip",
        type: "Underbarrel",
        Weapons: ["RPD", "M60", "Stoner 63"]
    },
    {
        ID: 5,
        name: "Bruiser Grip",
        type: "Underbarrel",
        Weapons: ["RPD", "M60", "Stoner 63"]
    },
    {
        ID: 5,
        name: "Field Agent Grip",
        type: "Underbarrel",
        Weapons: ["M60", "Stoner 63"]
    },
    {
        ID: 5,
        name: "SFOD Speed Grip",
        type: "Underbarrel",
        Weapons: ["M60", "Stoner 63"]
    },
    {
        ID: 5,
        name: "Spetsnaz Grip",
        type: "Underbarrel",
        Weapons: ["RPD"]
    },
    {
        ID: 5,
        name: "Spetsnaz Speed Grip",
        type: "Underbarrel",
        Weapons: ["RPD"]
    },
    {
        ID: 6,
        name: "100 RND",
        type: "Magazine",
        Weapons: ["RPD", "M60", "Stoner 63"]
    },
    {
        ID: 6,
        name: "Fast Mag",
        type: "Magazine",
        Weapons: ["RPD", "M60", "Stoner 63"]
    },
    {
        ID: 6,
        name: "100 RND Speed Mag",
        type: "Magazine",
        Weapons: ["RPD", "M60", "Stoner 63"]
    },
    {
        ID: 6,
        name: "Spetsnaz 125 RND",
        type: "Magazine",
        Weapons: ["RPD", "Stoner 63"]
    },
    {
        ID: 6,
        name: "Vandal Speed Loader",
        type: "Magazine",
        Weapons: ["RPD", "M60", "Stoner 63"]
    },
    {
        ID: 6,
        name: "Salvo 125 RND Fast Mag",
        type: "Magazine",
        Weapons: ["M60", "Stoner 63"]
    },
    {
        ID: 6,
        name: "VDV 125 RND Fast Mag",
        type: "Magazine",
        Weapons: ["RPD"]
    },
    {
        ID: 6,
        name: "Stanag 125 RND",
        type: "Magazine",
        Weapons: ["M60"]
    },
    {
        ID: 7,
        name: "Speed Tape",
        type: "Handle",
        Weapons: ["RPD", "M60", "Stoner 63"]
    },
    {
        ID: 7,
        name: "Dropshot Wrap",
        type: "Handle",
        Weapons: ["RPD", "M60", "Stoner 63"]
    },
    {
        ID: 7,
        name: "Field Tape",
        type: "Handle",
        Weapons: ["RPD", "M60", "Stoner 63"]
    },
    {
        ID: 7,
        name: "SASR Jungle Grip",
        type: "Handle",
        Weapons: ["M60", "Stoner 63"]
    },
    {
        ID: 7,
        name: "Serpent Wrap",
        type: "Handle",
        Weapons: ["RPD", "M60", "Stoner 63"]
    },
    {
        ID: 7,
        name: "Airborned Elastic Wrap",
        type: "Handle",
        Weapons: ["M60", "Stoner 63"]
    },
    {
        ID: 7,
        name: "Spetsnaz Field Grip",
        type: "Handle",
        Weapons: ["RPD"]
    },
    {
        ID: 7,
        name: "GRU Elastic Wrap",
        type: "Handle",
        Weapons: ["RPD"]
    },
    {
        ID: 8,
        name: "Tactical Stock",
        type: "Stock",
        Weapons: ["RPD", "M60", "Stoner 63"]
    },
    {
        ID: 8,
        name: "Wire Stock",
        type: "Stock",
        Weapons: ["RPD", "Stoner 63"]
    },
    {
        ID: 8,
        name: "Duster Pad",
        type: "Stock",
        Weapons: ["Stoner 63"]
    },
    {
        ID: 8,
        name: "Duster Stock",
        type: "Stock",
        Weapons: ["RPD", "M60"]
    },
    {
        ID: 8,
        name: "No Stock",
        type: "Stock",
        Weapons: ["RPD", "M60", "Stoner 63"]
    },
    {
        ID: 8,
        name: "SAS Combat Stock",
        type: "Stock",
        Weapons: ["Stoner 63", "M60"]
    },
    {
        ID: 8,
        name: "Spetsnaz PKM Stock",
        type: "Stock",
        Weapons: ["RPD"]
    },
    {
        ID: 8,
        name: "KGB Skeletal Stock",
        type: "Stock",
        Weapons: ["RPD"]
    },
    {
        ID: 8,
        name: "Raider Pad",
        type: "Stock",
        Weapons: ["Stoner 63"]
    },
    {
        ID: 8,
        name: "Raider Stock",
        type: "Stock",
        Weapons: ["M60"]
    },
    {
        ID: 8,
        name: "Marathon Stock",
        type: "Stock",
        Weapons: ["M60"]
    },
    {
        ID: 9,
        name: "No Attachment",
        type: "Stock",
        Weapons: ["Stoner 63", "M60", "RPD"]
    },
    {
        ID: 9,
        name: "No Attachment",
        type: "Stock",
        Weapons: ["Stoner 63", "M60", "RPD"]
    }
];
//Holds attachments for Shotguns
var ShotgunAttachments = [
   {
        ID: 1,
        name: "Millstop Reflex",
        type: "Scope",
        Weapons: ["Hauer 77", "Gallo SA12"]
    },
    {
        ID: 1,
        name: "Quickdot LED",
        type: "Scope",
        Weapons: ["Hauer 77", "Gallo SA12"]
    },
    {
        ID: 1,
        name: "Microflex LED",
        type: "Scope",
        Weapons: ["Hauer 77", "Gallo SA12"]
    },
    {
        ID: 2,
        name: "Duckbill Choke",
        type: "Muzzle",
        Weapons: ["Hauer 77", "Gallo SA12"]
    },
    {
        ID: 2,
        name: "Flash Cone 12 Ga",
        type: "Muzzle",
        Weapons: ["Hauer 77", "Gallo SA12"]
    },
    {
        ID: 2,
        name: "Sound Suppressor",
        type: "Muzzle",
        Weapons: ["Hauer 77", "Gallo SA12"]
    },
    {
        ID: 2,
        name: "Infantry V-Choke",
        type: "Muzzle",
        Weapons: ["Hauer 77", "Gallo SA12"]
    },
    {
        ID: 2,
        name: "SOCOM Blast Mitigator",
        type: "Muzzle",
        Weapons: ["Hauer 77", "Gallo SA12"]
    },
    {
        ID: 2,
        name: "Agency Choke",
        type: "Muzzle",
        Weapons: ["Hauer 77", "Gallo SA12"]
    },
    {
        ID: 3,
        name: "22\" Extended",
        type: "Barrel",
        Weapons: ["Hauer 77"]
    },
    {
        ID: 3,
        name: "20.4\" Cavalry Lancer",
        type: "Barrel",
        Weapons: ["Hauer 77"]
    },
    {
        ID: 3,
        name: "21.6\" Reinforced Heavy",
        type: "Barrel",
        Weapons: ["Hauer 77"]
    },
    {
        ID: 3,
        name: "24.1\" Ranger",
        type: "Barrel",
        Weapons: ["Hauer 77"]
    },
    {
        ID: 3,
        name: "19.3\" Hammered Forged",
        type: "Barrel",
        Weapons: ["Hauer 77"]
    },
    {
        ID: 3,
        name: "25.2\" Task Force",
        type: "Barrel",
        Weapons: ["Hauer 77"]
    },
    {
        ID: 3,
        name: "22.7\" Extended",
        type: "Barrel",
        Weapons: ["Gallo SA12"]
    },
    {
        ID: 3,
        name: "23.5\" Cavalry Lancer",
        type: "Barrel",
        Weapons: ["Gallo SA12"]
    },
    {
        ID: 3,
        name: "21.4\" Reinforced Heavy",
        type: "Barrel",
        Weapons: ["Gallo SA12"]
    },
    {
        ID: 3,
        name: "24.6\" Ranger",
        type: "Barrel",
        Weapons: ["Gallo SA12"]
    },
    {
        ID: 3,
        name: "20.3\" Hammered Forged",
        type: "Barrel",
        Weapons: ["Gallo SA12"]
    },
    {
        ID: 3,
        name: "24.8\" Task Force",
        type: "Barrel",
        Weapons: ["Gallo SA12"]
    },
    {
        ID: 4,
        name: "Steady Aim Laser",
        type: "Body",
        Weapons: ["Hauer 77", "Gallo SA12"]
    },
    {
        ID: 4,
        name: "Mounted Flashlight",
        type: "Body",
        Weapons: ["Hauer 77", "Gallo SA12"]
    },
    {
        ID: 4,
        name: "SOF Target Designator",
        type: "Body",
        Weapons: ["Hauer 77", "Gallo SA12"]
    },
    {
        ID: 4,
        name: "SWAT 5mw Laser Sight",
        type: "Body",
        Weapons: ["Hauer 77", "Gallo SA12"]
    },
    {
        ID: 4,
        name: "Tiger Team Spotlight",
        type: "Body",
        Weapons: ["Hauer 77", "Gallo SA12"]
    },
    {
        ID: 4,
        name: "Ember Sighting Point",
        type: "Body",
        Weapons: ["Hauer 77", "Gallo SA12"]
    },
    {
        ID: 4,
        name: "6 RND Tube",
        type: "Magazine",
        Weapons: ["Hauer 77"]
    },
    {
        ID: 4,
        name: "STANAG 8 RND Tube",
        type: "Magazine",
        Weapons: ["Hauer 77"]
    },
    {
        ID: 4,
        name: "9 RND Tube",
        type: "Magazine",
        Weapons: ["Gallo SA12"]
    },
    {
        ID: 4,
        name: "STANAG 12 RND Tube",
        type: "Magazine",
        Weapons: ["Gallo SA12"]
    },
    {
        ID: 5,
        name: "Speed Tape",
        type: "Handle",
        Weapons: ["Hauer 77", "Gallo SA12"]
    },
    {
        ID: 5,
        name: "Dropshot Wrap",
        type: "Handle",
        Weapons: ["Hauer 77", "Gallo SA12"]
    },
    {
        ID: 5,
        name: "Field Tape",
        type: "Handle",
        Weapons: ["Hauer 77", "Gallo SA12"]
    },
    {
        ID: 5,
        name: "SASR Jungle Grip",
        type: "Handle",
        Weapons: ["Hauer 77", "Gallo SA12"]
    },
    {
        ID: 5,
        name: "Serpent Wrap",
        type: "Handle",
        Weapons: ["Hauer 77", "Gallo SA12"]
    },
    {
        ID: 5,
        name: "Airborne Elastic Wrap",
        type: "Handle",
        Weapons: ["Hauer 77", "Gallo SA12"]
    },
    {
        ID: 7,
        name: "Tactical Stock",
        type: "Stock",
        Weapons: ["Hauer 77", "Gallo SA12"]
    },
    {
        ID: 7,
        name: "Wire Stock",
        type: "Stock",
        Weapons: ["Gallo SA12"]
    },
    {
        ID: 7,
        name: "Duster Stock",
        type: "Stock",
        Weapons: ["Gallo SA12"]
    },
    {
        ID: 7,
        name: "No Stock",
        type: "Stock",
        Weapons: ["Hauer 77", "Gallo SA12"]
    },
    {
        ID: 7,
        name: "SAS Combat Stock",
        type: "Stock",
        Weapons: ["Hauer 77", "Gallo SA12"]
    },
    {
        ID: 7,
        name: "Marathon Stock",
        type: "Stock",
        WeaponMs: ["Hauer 77", "Gallo SA12"]
    },
    {
        ID: 7,
        name: "Shotgun Stock",
        type: "Stock",
        WeaponMs: ["Hauer 77"]
    },
    {
        ID: 7,
        name: "Duster Pad",
        type: "Stock",
        WeaponMs: ["Hauer 77"]
    },
    {
        ID: 8,
        name: "No Attachment",
        type: "Stock",
        Weapons: ["Hauer 77", "Gallo SA12"]
    },
    {
        ID: 8,
        name: "No Attachment",
        type: "Stock",
        Weapons: ["Hauer 77", "Gallo SA12"]
    }
];
//Holds attachment for Pistols
var PistolAttachments = [
    {
        ID: 1,
        name: "Quickdot LED",
        type: "Scope",
        Weapons: ["1911", "Magnum", "Diamatti"]
    },
    {
        ID: 1,
        name: "Otero Mini Reflex",
        type: "Scope",
        Weapons: ["1911", "Magnum", "Diamatti"]
    },
    {
        ID: 1,
        name: "Microflex LED",
        type: "Scope",
        Weapons: ["1911", "Magnum", "Diamatti"]
    },
    {
        ID: 2,
        name: "Muzzle Brake 45. APC",
        type: "Muzzle",
        Weapons: ["1911", "Magnum"]
    },
    {
        ID: 2,
        name: "Flashguard .45 APC",
        type: "Muzzle",
        Weapons: ["1911", "Magnum"]
    },
    {
        ID: 2,
        name: "Muzzle Brake 9",
        type: "Muzzle",
        Weapons: ["Diamatti"]
    },
    {
        ID: 2,
        name: "Flashguard 9",
        type: "Muzzle",
        Weapons: ["Diamatti"]
    },
    {
        ID: 2,
        name: "Sound Suppressor",
        type: "Muzzle",
        Weapons: ["1911", "Magnum", "Diamatti"]
    },
    {
        ID: 2,
        name: "Infantry Compensator",
        type: "Muzzle",
        Weapons: ["1911", "Magnum", "Diamatti"]
    },
    {
        ID: 2,
        name: "SOCOM Eliminator",
        type: "Muzzle",
        Weapons: ["1911", "Magnum", "Diamatti"]
    },
    {
        ID: 2,
        name: "Agency Suppressor",
        type: "Muzzle",
        Weapons: ["1911", "Magnum", "Diamatti"]
    },
    {
        ID: 3,
        name: "6.83\" Extended",
        type: "Barrel",
        Weapons: ["1911"]
    },
    {
        ID: 3,
        name: "5.42\" Cavalry Lancer",
        type: "Barrel",
        Weapons: ["1911"]
    },
    {
        ID: 3,
        name: "6.45\" Reinforced Heavy",
        type: "Barrel",
        Weapons: ["1911"]
    },
    {
        ID: 3,
        name: "7.12\" Chrome Lined",
        type: "Barrel",
        Weapons: ["1911"]
    },
    {
        ID: 3,
        name: "5.63\" Takedown",
        type: "Barrel",
        Weapons: ["1911"]
    },
    {
        ID: 3,
        name: "6.53\" Task Force",
        type: "Barrel",
        Weapons: ["1911"]
    },
    {
        ID: 3,
        name: "7.2\" Extended",
        type: "Barrel",
        Weapons: ["Magnum"]
    },
    {
        ID: 3,
        name: "5.9\" Cavalry Lancer",
        type: "Barrel",
        Weapons: ["Magnum"]
    },
    {
        ID: 3,
        name: "6.4\" Reinforced Heavy",
        type: "Barrel",
        Weapons: ["Magnum"]
    },
    {
        ID: 3,
        name: "7.5\" Chrome Lined",
        type: "Barrel",
        Weapons: ["Magnum"]
    },
    {
        ID: 3,
        name: "4.7\" Takedown",
        type: "Barrel",
        Weapons: ["Magnum"]
    },
    {
        ID: 3,
        name: "7.2\" Task Force",
        type: "Barrel",
        Weapons: ["Magnum"]
    },
    {
        ID: 3,
        name: "7.8\" Extended",
        type: "Barrel",
        Weapons: ["Diamatti"]
    },
    {
        ID: 3,
        name: "6.5\" Cavalry Lancer",
        type: "Barrel",
        Weapons: ["Diamatti"]
    },
    {
        ID: 3,
        name: "7.2\" Reinforced Heavy",
        type: "Barrel",
        Weapons: ["Diamatti"]
    },
    {
        ID: 3,
        name: "7.8\" Chrome Lined",
        type: "Barrel",
        Weapons: ["Diamatti"]
    },
    {
        ID: 3,
        name: "6.5\" Takedown",
        type: "Barrel",
        Weapons: ["Diamatti"]
    },
    {
        ID: 3,
        name: "7.2\" Task Force",
        type: "Barrel",
        Weapons: ["Diamatti"]
    },
    {
        ID: 4,
        name: "Steady Aim Laser",
        type: "Body",
        Weapons: ["1911", "Magnum", "Diamatti"]
    },
    {
        ID: 4,
        name: "Mounted Flashlight",
        type: "Body",
        Weapons: ["1911", "Magnum", "Diamatti"]
    },
    {
        ID: 4,
        name: "SOF Target Designator",
        type: "Body",
        Weapons: ["1911", "Magnum", "Diamatti"]
    },
    {
        ID: 4,
        name: "SWAT 5mw Laser Sight",
        type: "Body",
        Weapons: ["1911", "Magnum", "Diamatti"]
    },
    {
        ID: 4,
        name: "Tiger Team Spotlight",
        type: "Body",
        Weapons: ["1911", "Magnum", "Diamatti"]
    },
    {
        ID: 4,
        name: "Ember Sighting Point",
        type: "Body",
        Weapons: ["1911", "Magnum", "Diamatti"]
    },
    {
        ID: 5,
        name: "12 RND",
        type: "Magazine",
        Weapons: ["1911"]
    },
    {
        ID: 5,
        name: "Fast Mag",
        type: "Magazine",
        Weapons: ["1911", "Magnum", "Diamatti"]
    },
    {
        ID: 5,
        name: "12 RND Speed Mag",
        type: "Magazine",
        Weapons: ["1911"]
    },
    {
        ID: 5,
        name: "Stanag 14 RND",
        type: "Magazine",
        Weapons: ["1911"]
    },
    {
        ID: 5,
        name: "Vandal Speed Loader",
        type: "Magazine",
        Weapons: ["1911", "Magnum", "Diamatti"]
    },
    {
        ID: 5,
        name: "Salvo 14 RND Fast Mag",
        type: "Magazine",
        Weapons: ["1911"]
    },
    {
        ID: 5,
        name: "9 RND",
        type: "Magazine",
        Weapons: ["Magnum"]
    },
    {
        ID: 5,
        name: "9 RND Speed Mag",
        type: "Magazine",
        Weapons: ["Magnum"]
    },
    {
        ID: 5,
        name: "Stanag 12 RND",
        type: "Magazine",
        Weapons: ["Magnum"]
    },
    {
        ID: 5,
        name: "Salvo 12 RND Fast Mag",
        type: "Magazine",
        Weapons: ["Magnum"]
    },
    {
        ID: 5,
        name: "24 RND",
        type: "Magazine",
        Weapons: ["Diamatti"]
    },
    {
        ID: 5,
        name: "24 RND Speed Mag",
        type: "Magazine",
        Weapons: ["Diamatti"]
    },
    {
        ID: 5,
        name: "Stanag 30 RND",
        type: "Magazine",
        Weapons: ["Diamatti"]
    },
    {
        ID: 5,
        name: "Salvo 30 RND Fast Mag",
        type: "Magazine",
        Weapons: ["Diamatti"]
    },
    {
        ID: 6,
        name: "Speed Tape",
        type: "Handle",
        Weapons: ["1911", "Magnum", "Diamatti"]
    },
    {
        ID: 6,
        name: "Dropshot Wrap",
        type: "Handle",
        Weapons: ["1911", "Magnum", "Diamatti"]
    },
    {
        ID: 6,
        name: "Field Tape",
        type: "Handle",
        Weapons: ["1911", "Magnum", "Diamatti"]
    },
    {
        ID: 6,
        name: "SASR Jungle Grip",
        type: "Handle",
        Weapons: ["1911", "Magnum", "Diamatti"]
    },
    {
        ID: 6,
        name: "Serpent Wrap",
        type: "Handle",
        Weapons: ["1911", "Magnum", "Diamatti"]
    },
    {
        ID: 6,
        name: "Airborne Elastic Wrap",
        type: "Handle",
        Weapons: ["1911", "Magnum", "Diamatti"]
    },
    {
        ID: 7,
        name: "Dual Wield",
        type: "Stock",
        Weapons: ["1911", "Magnum", "Diamatti"]
    },
    {
        ID: 8,
        name: "No Attachment",
        type: "None",
        Weapons: ["1911", "Magnum", "Diamatti"]
    },
    {
        ID: 8,
        name: "No Attachment",
        type: "None",
        Weapons: ["1911", "Magnum", "Diamatti"]
    }
];

var OtherAttachments = [
    {
        ID: 9,
        name: "No Attachment",
        type: "None",
        Weapons: ["Cigma 2", "RPG-7", "M79", "Knife"]
    },
    {
        ID: 8,
        name: "No Attachment",
        type: "None",
        Weapons: ["Cigma 2", "RPG-7", "M79", "Knife"]
    },
    {
        ID: 7,
        name: "No Attachment",
        type: "None",
        Weapons: ["Cigma 2", "RPG-7", "M79", "Knife"]
    }
];
//Holds Perks for Perk 1
var PerkOne = [
    {ID: 0, name: "Engineer", image: "Engineer.png"},
    {ID: 1, name: "Paranoia", image: "Paranoia.jpg"},
    {ID: 2, name: "Flak Jacket", image: "FlakJacket.png"},
    {ID: 3, name: "Tactical Mask", image: "TacticalMask.png"},
    {ID: 4, name: "Forward Intel", image: "ForwardIntel.jpg"}
];
//Holds Perks for Perk 2
var PerkTwo = [
    {ID: 0, name: "Assassin", image: "Assassin.png"},
    {ID: 1, name: "Gearhead", image: "Gearhead.png"},
    {ID: 2, name: "Scavenger", image: "Scavenger.png"},
    {ID: 3, name: "Quartermaster", image: "Quartermaster.png"},
    {ID: 4, name: "Tracker", image: "Tracker.jpg"}
];
//Holds Perks for Perk 3
var PerkThree = [
    {ID: 0, name: "Gung-Ho", image: "GungHo.png"},
    {ID: 1, name: "Ghost", image: "Ghost.png"},
    {ID: 2, name: "Cold Blooded", image: "ColdBlooded.png"},
    {ID: 3, name: "Ninja", image: "Ninja.jpg"},
    {ID: 4, name: "SpyCraft", image: "SpyCraft.jpg"}
];
//Holds Lethals Objects
var Lethal = [
    {ID: 0, name: "C4", image: "C4.jpg"},
    {ID: 1, name: "Frag", image: "Frag.jpg"},
    {ID: 2, name: "Molotov", image: "Molotov.jpg"},
    {ID: 3, name: "Semtex", image: "Semtex.jpg"},
    {ID: 4, name: "Tomahawk", image: "Tomahawk.jpg"}
];
//Holds Tacticals Objects
var Tactical = [
    {ID: 0, name: "Decoy", image: "Decoy.jpg"},
    {ID: 1, name: "FlashBang", image: "Flash.jpg"},
    {ID: 2, name: "Smoke Grenade", image: "Smoke.jpg"},
    {ID: 3, name: "Stimshot", image: "Stim.jpg"},
    {ID: 4, name: "Stun Grenade", image: "Stun.jpg"}
];
//Holds FieldUpgrade Objects
var FieldUpgrades = [
    {ID: 0, name: "Assault Pack", image: "Assaultpack.jpg"},
    {ID: 1, name: "Field Mic", image: "FieldMic.jpg"},
    {ID: 2, name: "Gas Mine", image: "GasMine.jpg"},
    {ID: 3, name: "Jammer", image: "Jammer.jpg"},
    {ID: 4, name: "Proximity", image: "Proximity.jpg"},
    {ID: 5, name: "Sam Turret", image: "SamTurret.jpg"},
    {ID: 6, name: "Trophy System", image: "TrophySystem.jpg"}
];
//Holds Wildcard Objects
var Wildcards = [
    {ID: 0, name: "Danger Close", image: "DangerClose.png"},
    {ID: 1, name: "Law Breaker", image: "LawBreaker.png"},
    {ID: 2, name: "Gunfighter", image: "Gunfighter.png"},
    {ID: 3, name: "Perk Greed", image: "PerkGreed.jpg"}
];

var allWeapons = Weapon1.concat(Weapon2);
var allPerks = PerkOne.concat(PerkTwo, PerkThree);
var Weapon1Name = "";               //Holds name of weapon one; used for finding attachments
var Weapon2Name = "";               //Holds name of weapon two; used for finding attachments
var G1Type = "";                    //Holds weapon one weapon type used for selecting attachment array
var G2Type = "";                    //Holds weapon two weapon type used for selecting attachment array
var G1Counter = "";                 //Holds how many attachments have been selected for weapon one
var G2Counter = "";                 //Holds how many attachments have been selected for weapon two
var G1Attachments = [];             //Holds attachment type so they cannot be re-selected for weapon one
var G2Attachments = [];             //Holds attachemnt type so they cannot be re-selected for weapon two
var gunCounter = 0;                 //Used to determine if generating is for weapon one or weapon two
var Perk1 = 0;                      //Will hold value of Perk ID
var Perk1Name = "";                 //Hold name of Perk 1
var Perk2 = 0;                      //Will hold value of Perk ID
var Perk2Name = "";                 //Hold name of Perk 2 
var Perk3 = 0;                      //Will hold value of Perk ID
var Perk3Name = "";                 //Hold name of Perk 3
var Wildcard;                       //Hold wildcard value to determine extra functions

function GenerateWeapon(gunID){
    var dfrd1 = $.Deferred();
    $("#gunNames").text(Wildcard.toString());
    var currGunArray = [];
    var counter = 0;                //Used to determine when number of random spins has been reached to clear setInterval on spinner
    var randospin = (Math.floor(Math.random()*32) + 21);    //Used to determine random number of spins
    var gunImages = $(gunID);       //Used to store element id as variable
    var imageDir = "../gunImages/";                 //Variable storing partial datapath to images
    if(gunCounter == 0){
        if(Wildcard == 1){
            currGunArray = allWeapons;
            var gunNumber = Math.floor(Math.random()* allWeapons.length);  //Used to select a weapon from currGunArray based on length
        }else{
        currGunArray = Weapon1;
        var gunNumber = Math.floor(Math.random() * (currGunArray.length));  //Used to select a weapon from currGunArray based on length
        }
        G1Type = currGunArray[gunNumber].gunType;   //Save selected gun type as G1Type
        Weapon1Name = currGunArray[gunNumber].gun; //Save selected gun name as Weapon1Name
        gunCounter++;                               //Increase gun Counter to 1 to select secondary weapon on next function call
    } else{
        if(Wildcard == 1){
            currGunArray = allWeapons;
            var gunNumber = Math.floor(Math.random()*allWeapons.length);  //Used to select a weapon from currGunArray based on length
        }else{
            currGunArray = Weapon2;
            var gunNumber = Math.floor(Math.random()* (currGunArray.length));  //Used to select a weapon from currGunArray based on length
        }
        G2Type = currGunArray[gunNumber].gunType;   //Save selected gun type as G1Type
        Weapon2Name = currGunArray[gunNumber].gun; //Save selected gun name as Weapon1Name
        }
    var selectedWeapon = imageDir + currGunArray[gunNumber].image;  //Filepath to selected weapon image
    var spinner = setInterval(function(){
        do {var randoNum = Math.floor(Math.random()*(currGunArray.length))}       //Select random number using length of currGunArray
        while(currGunArray[randoNum].image == "");
        var randoWeapon = imageDir + currGunArray[randoNum].image;         //Hold random weapon image to give spinner effect
        gunImages.attr("src", randoWeapon);                                 //Change element image for spin effect
        if (counter == randospin){                                          //Stop spin when counter == randospin
            gunImages.attr("src", selectedWeapon);                           //Final set of attr src to seleced weapon image
            clearInterval(spinner);                                         //Stop setInterval
            dfrd1.resolve();                                                //show function is done
        }
        counter++;
    },75);
    return $.when(dfrd1).done().promise();
}

function GenerateAttachment(attachmentID, gun){
    var dfrd1 = $.Deferred();
    var selectedAttachment = "";
    var counter = 0;
    var attachments;                        //Will hold current valid attachments depending on main gunType
    var attachID = $(attachmentID);             //attach ID hold object ID
    var imageDir = "../gunImages/Attachments/"; //Partial Datapath for attachment images
    var Ready = false;
    if(gun == 0){
        if(G1Type == "Sniper"){
            attachments = SniperAttachments;
        } else if(G1Type == "Assault"){
            attachments = AssaultAttachments;
        } else if(G1Type == "Submachine"){
            attachments = SubmachineAttachments;
        } else if(G1Type == "Tactical"){
            attachments = TacticalAttachments;
        } else if(G1Type == "Shotgun"){
            attachments = ShotgunAttachments;
        } else if(G1Type == "LMG"){
            attachments = LMGAttachments;
        } else if(G1Type = "Pistol"){
            attachments = PistolAttachments;
        }
        do{
                var attachNumber = Math.floor(Math.random() * attachments.length);      //Hold index for selected attachment
        } while ((G1Attachments.includes(attachments[attachNumber].ID) == true)
                 || (attachments[attachNumber].Weapons.includes(Weapon1Name) == false));
        G1Attachments[G1Counter] = attachments[attachNumber].ID                    //Store ID of already selected attachments
        G1Counter++;
    } else if(gun == 1){
        if(G2Type == "Sniper"){
            attachments = SniperAttachments;
        } else if(G2Type == "Assault"){
            attachments = AssaultAttachments;
        } else if(G2Type == "Submachine"){
            attachments = SubmachineAttachments;
        } else if(G2Type == "Tactical"){
            attachments = TacticalAttachments;
        } else if(G2Type == "Shotgun"){
            attachments = ShotgunAttachments;
        } else if(G2Type == "LMG"){
            attachments = LMGAttachments;
        } else if(G2Type = "Pistol"){
            attachments = PistolAttachments;
        }
        do{
                var attachNumber = Math.floor(Math.random() * attachments.length);      //Hold index for selected attachment
        } while ((G2Attachments.includes(attachments[attachNumber].ID) == true)
                 || (attachments[attachNumber].Weapons.includes(Weapon2Name) == false));
        G2Attachments[G2Counter] = attachments[attachNumber].ID                    //Store ID of already selected attachments
        G2Counter++;
    }
    
    var randomspinner = (Math.floor(Math.random()*32) + 21);                    //Randoms number of spins starting at 21 and max being 32
    var size = attachments.length;
    var spinner = setInterval(function(){                                       //Spinner Function
                var randoNum = Math.floor(Math.random() * size);
                //var randoAttachment = imageDir + attachments[randoNum].name;
                var randoAttachment = attachments[randoNum].name;
                //attachID.attr("src", randoAttachment);
                attachID.text(randoAttachment);
                if(counter == randomspinner){
                    //selectedAttachment = imageDir + attachments[attachNumber].name;
                    selectedAttachment = attachments[attachNumber].name;
                    attachID.text(attachments[attachNumber].type + ": " + selectedAttachment);
                    //attachID.attr("src", selectedAttachment);
                    clearInterval(spinner);
                    dfrd1.resolve();
                }
                counter++;
            }, 75);
    return $.when(dfrd1).done().promise();
}

function GeneratePerk(perkID, pNumber){
    var dfrd1 = $.Deferred();
    var currPerkArray;
    if(pNumber == "1"){
        currPerkArray = PerkOne;
    } else if(pNumber == "2"){
        currPerkArray = PerkTwo;
    } else if(pNumber == "3"){
        currPerkArray = PerkThree;
    }
    var perkNumber = Math.floor(Math.random() * (currPerkArray.length));
    do{var perkNumber = Math.floor(Math.random() * (currPerkArray.length));}
    while(currPerkArray[perkNumber].ID == Perk1 ||
         currPerkArray[perkNumber].ID == Perk2 ||
         currPerkArray[perkNumber].ID == Perk3);
    
    if(Perk1Name == "" || Perk2Name == "" || Perk3Name == ""){
        if(pNumber == "1"){
            Perk1 = currPerkArray[perkNumber].ID;
            Perk1Name = currPerkArray[perkNumber].name;
        } else if(pNumber == "2"){
            Perk2 = currPerkArray[perkNumber].ID;
            Perk2Name = currPerkArray[perkNumber].name;
        } else if(pNumber == "3"){
            Perk3 = currPerkArray[perkNumber].ID;
            Perk3Name = currPerkArray[perkNumber].name;
        }
    }
    var counter = 0;
    var perkObj = $(perkID);
    var imageDir = "../gunImages/Perk" + pNumber + "/";                 //Variable storing partial datapath to images
    var selectedPerk = imageDir + currPerkArray[perkNumber].image;
    var randospin = (Math.floor(Math.random()*32) + 21);    //Used to determine random number of spins
    
    var spinner = setInterval(function(){
        var randoNum = Math.floor(Math.random()*(currPerkArray.length))
        var randoPerk = imageDir + currPerkArray[randoNum].image;         //Hold random weapon image to give spinner effect
        perkObj.attr("src", randoPerk);                                 //Change element image for spin effect
        if (counter == randospin){                                          //Stop spin when counter == randospin
            perkObj.attr("src", selectedPerk);                           //Final set of attr src to seleced weapon image
            clearInterval(spinner);                                         //Stop setInterval
            dfrd1.resolve();                                                //show function is done
        }
        counter++;
    },75);
    return $.when(dfrd1).done().promise()
}

function GenerateLethal(lethalID){
    var dfrd1 = $.Deferred();
    var lethalNumber = Math.floor(Math.random() * (Lethal.length));
    var counter = 0;
    var lethalObj = $(lethalID);
    var imageDir = "../gunImages/Lethal/";                 //Variable storing partial datapath to images
    var selectedLethal = imageDir + Lethal[lethalNumber].image;
    var randospin = (Math.floor(Math.random()*32) + 21);    //Used to determine random number of spins
    
    var spinner = setInterval(function(){
        var randoNum = Math.floor(Math.random()*(Lethal.length))
        var randoLethal = imageDir + Lethal[randoNum].image;         //Hold random weapon image to give spinner effect
        lethalObj.attr("src", randoLethal);                                 //Change element image for spin effect
        if (counter == randospin){                                          //Stop spin when counter == randospin
            lethalObj.attr("src", selectedLethal);                           //Final set of attr src to seleced weapon image
            clearInterval(spinner);                                         //Stop setInterval
            dfrd1.resolve();                                                //show function is done
        }
        counter++;
    },75);
    return $.when(dfrd1).done().promise();
}

function GenerateTactical(tacticalID){
    var dfrd1 = $.Deferred();
    var tacticalNumber = Math.floor(Math.random() * (Tactical.length));
    var counter = 0;
    var tacticalObj = $(tacticalID);
    var imageDir = "../gunImages/Tactical/";                 //Variable storing partial datapath to images
    var selectedTactical = imageDir + Tactical[tacticalNumber].image;
    var randospin = (Math.floor(Math.random()*32) + 21);    //Used to determine random number of spins
    
    var spinner = setInterval(function(){
        var randoNum = Math.floor(Math.random()*(Tactical.length))
        var randoTactical = imageDir + Tactical[randoNum].image;         //Hold random weapon image to give spinner effect
        tacticalObj.attr("src", randoTactical);                                 //Change element image for spin effect
        if (counter == randospin){                                          //Stop spin when counter == randospin
            tacticalObj.attr("src", selectedTactical);                           //Final set of attr src to seleced weapon image
            clearInterval(spinner);                                         //Stop setInterval
            dfrd1.resolve();                                                //show function is done
        }
        counter++;
    },75);
    return $.when(dfrd1).done().promise();
}

function GenerateFieldUpgrade(fieldUpgradeID){
    var dfrd1 = $.Deferred();
    var fieldUpgradeNumber = Math.floor(Math.random() * (FieldUpgrades.length));
    var counter = 0;
    var fieldUpgradeObj = $(fieldUpgradeID);
    var imageDir = "../gunImages/FieldUpgrades/";                 //Variable storing partial datapath to images
    var selectedFieldUpgrade = imageDir + FieldUpgrades[fieldUpgradeNumber].image;
    var randospin = (Math.floor(Math.random()*32) + 21);    //Used to determine random number of spins
    
    var spinner = setInterval(function(){
        var randoNum = Math.floor(Math.random()*(FieldUpgrades.length))
        var randoFieldUpgrade = imageDir + FieldUpgrades[randoNum].image;         //Hold random weapon image to give spinner effect
        fieldUpgradeObj.attr("src", randoFieldUpgrade);                                 //Change element image for spin effect
        if (counter == randospin){                                          //Stop spin when counter == randospin
            fieldUpgradeObj.attr("src", selectedFieldUpgrade);                           //Final set of attr src to seleced weapon image
            clearInterval(spinner);                                         //Stop setInterval
            dfrd1.resolve();                                                //show function is done
        }
        counter++;
    },75);
    return $.when(dfrd1).done().promise();
}

function GenerateWildcard(wildcardID){
    var dfrd1 = $.Deferred();
    var counter = 0;
    var wildcardObj = $(wildcardID);
    var imageDir = "../gunImages/Wildcards/";                 //Variable storing partial datapath to images
    var selectedWildcard = imageDir + Wildcards[Wildcard].image;
    var randospin = (Math.floor(Math.random()*32) + 21);    //Used to determine random number of spins
    
    var spinner = setInterval(function(){
        var randoNum = Math.floor(Math.random()*(Wildcards.length))
        var randoWildcards = imageDir + Wildcards[randoNum].image;         //Hold random weapon image to give spinner effect
        wildcardObj.attr("src", randoWildcards);                                 //Change element image for spin effect
        if (counter == randospin){                                          //Stop spin when counter == randospin
            wildcardObj.attr("src", selectedWildcard);                           //Final set of attr src to seleced weapon image
            clearInterval(spinner);                                         //Stop setInterval
            dfrd1.resolve();                                                //show function is done
        }
        counter++;
    },75);
    return $.when(dfrd1).done().promise();
}

function GenerateOneAttachments(){
     GenerateAttachment("#MAttachment1", 0).done(function(){
            GenerateAttachment("#MAttachment2", 0).done(function(){
                GenerateAttachment("#MAttachment3", 0).done(function(){
                   GenerateAttachment("#MAttachment4", 0).done(function(){
                        GenerateAttachment("#MAttachment5", 0).done(function(){
                            if(Wildcard == 2){
                                GenerateAttachment("#MAttachment6", 0).done(function(){
                                    GenerateAttachment("#MAttachment7", 0).done(function(){
                                    GenerateAttachment("#MAttachment8", 0); 
                                    });    
                                });
                            }
                        }); 
                    });
                });
            }); 
        });
}

function GenerateTwoAttachments(){
        GenerateAttachment("#SAttachment1", 1).done(function(){
           GenerateAttachment("#SAttachment2", 1).done(function(){
               GenerateAttachment("#SAttachment3", 1).done(function(){
                    GenerateAttachment("#SAttachment4", 1).done(function(){
                        GenerateAttachment("#SAttachment5", 1);
                    });
                });
            }); 
        });
}

function Loadout(){
    G1Type = "";
    G2Type = "";
    G1Counter = 0;
    G2Counter = 0;
    G1Attachments = [];
    G2Attachments = [];
    gunCounter = 0;
    Perk1 = 0;
    Perk2 = 0;
    Perk3 = 0;
    Perk1Name = "";
    Perk2Name = "";
    Perk3Name = "";
    $("#MAttachment1").text("");
    $("#MAttachment2").text("");
    $("#MAttachment3").text("");
    $("#MAttachment4").text("");
    $("#MAttachment5").text("");
    $("#MAttachment6").text("");
    $("#MAttachment7").text("");
    $("#MAttachment8").text("");
    $("#SAttachment1").text("");
    $("#SAttachment2").text("");
    $("#SAttachment3").text("");
    $("#SAttachment4").text("");
    $("#SAttachment5").text("");
    Wildcard = Math.floor(Math.random()* 4);
    if(Wildcard == 3){
        $("#PerkWild1").css("display", "block");
        $("#PerkWild2").css("display", "block");
        $("#PerkWild3").css("display", "block");
    } else{
        $("#PerkWild1").css("display", "none");
        $("#PerkWild2").css("display", "none");
        $("#PerkWild3").css("display", "none");   
    }
    GenerateWeapon("#MgunImage").done(function(){
        if(G1Type != "Special" && G1Type != "Launcher" && G1Type != "Knife"){
            GenerateOneAttachments();
        }
        GenerateWeapon("#SgunImage").done(function(){
            if(G2Type != "Special" && G2Type != "Launcher" && G2Type != "Knife"){
                GenerateTwoAttachments();
            }
        });
        GeneratePerk("#Perk1", "1").done(function(){
            GeneratePerk("#Perk2", "2").done(function(){
                GeneratePerk("#Perk3", "3").done(function(){
                    if(Wildcard == 3){
                    GeneratePerk("#PerkWild1", "1");
                    GeneratePerk("#PerkWild2", "2");
                    GeneratePerk("#PerkWild3", "3");
                }
            });
        });
    });
    GenerateLethal("#Lethal");
    GenerateTactical("#Tactical");
    GenerateFieldUpgrade("#FieldUpgrade");
    GenerateWildcard("#Wildcard");
    });
}