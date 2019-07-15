var db = [ 
    {
        "id": "PB360", 
        "name": "Placa Gigabyte B360", 
        "compatibility": [ "IPG5400", "IC9100F", "IC9400F", "2666C" ],
        "supplier": [
            {
                "name": "supplierA",
                "price": 1000
            },
            {
                "name": "supplierB",
                "price": 2000
            }
        ],
        "type": "placa",
        "color": "yellow"
    },            
    {
        "id": "PH310", 
        "name": "Placa Madre MSI H310 pro VH", 
        "compatibility": [ "IPG5400", "IC9400F", "IC9100F", "2666C" ],
        "supplier": [
            {
                "name": "supplierA",
                "price": 1000
            },
            {
                "name": "supplierB",
                "price": 2000
            }
        ],
        "type": "placa",
        "color": "cyan"
    },            
    {
        "id": "PZ390X", 
        "name": "Placa Gygabyte Z390 Gaming X", 
        "compatibility": [ "IC9400F", "IC9700K", "3000B", "3200P" ],
        "supplier": [
            {
                "name": "supplierA",
                "price": 1000
            },
            {
                "name": "supplierB",
                "price": 2000
            }
        ],
        "type": "placa",
        "color": "purple"
    },            
    {
        "id": "PZ390", 
        "name": "Gygabyte Z390 Aorus Master", 
        "compatibility": [ "IC9700K", "IC9900K", "3200G", "3200P", "3000B" ],
        "supplier": [
            {
                "name": "supplierA",
                "price": 1000
            },
            {
                "name": "supplierB",
                "price": 2000
            }
        ],
        "type": "placa",
        "color": "green"
    },            
    {
        "id": "PB450", 
        "name": "Placa Madre B450 MSI", 
        "compatibility": [ "AR2400", "AR2600", "2666C" ],
        "supplier": [
            {
                "name": "supplierA",
                "price": 1000
            },
            {
                "name": "supplierB",
                "price": 2000
            }
        ],
        "type": "placa",
        "color": "cyan"
    },            
    {
        "id": "A320K", 
        "name": "Placa Madre ASUS A320K", 
        "compatibility": [ "AR2400", "AR2200", "2666C" ],
        "supplier": [
            {
                "name": "supplierA",
                "price": 1000
            },
            {
                "name": "supplierB",
                "price": 2000
            }
        ],
        "type": "placa",
        "color": "cyan"
    },            
    {
        "id": "X470", 
        "name": "Placa X470 Aorus", 
        "compatibility": [ "AR2700", "AR2600", "3200P" ],
        "supplier": [
            {
                "name": "supplierA",
                "price": 1000
            },
            {
                "name": "supplierB",
                "price": 2000
            }
        ],
        "type": "placa",
        "color": "cyan"
    },    
    {
        "id": "2666C", 
        "name": "8GB 2666mhz Crucial", 
        "compatibility": [ "PB360", "PH310", "PB450", "A320K" ],
        "supplier": [
            {
                "name": "supplierA",
                "price": 1000
            },
            {
                "name": "supplierB",
                "price": 2000
            }
        ],
        "type": "memoria",
        "color": "orange"
    },
    {
        "id": "3000B", 
        "name": "8GB 3000mhz Crucial BAL", 
        "compatibility": [ "PZ390", "PZ390X" ],
        "supplier": [
            {
                "name": "supplierA",
                "price": 1000
            },
            {
                "name": "supplierB",
                "price": 2000
            }
        ],
        "type": "memoria",
        "color": "orange"
    },
    {
        "id": "3200P", 
        "name": "8GB 3200mhz predator RGB", 
        "compatibility": [ "PZ390", "PZ390X", "X470" ],
        "supplier": [
            {
                "name": "supplierA",
                "price": 1000
            },
            {
                "name": "supplierB",
                "price": 2000
            }
        ],
        "type": "memoria",
        "color": "orange"
    },
    {
        "id": "3200G", 
        "name": "16GB 3200mhz G.SKILL Z Royal", 
        "compatibility": [ "Z390" ],
        "supplier": [
            {
                "name": "supplierA",
                "price": 1000
            },
            {
                "name": "supplierB",
                "price": 2000
            }
        ],
        "type": "memoria",
        "color": "orange"
    },   
    {
        "id": "IPG5400", 
        "name": "Intel Pentium G5400",
        "compatibility": [ "PB360", "PH310" ],
        "supplier": [
            {
                "name": "supplierA",
                "price": 1000
            },
            {
                "name": "supplierB",
                "price": 2000
            }
        ],
        "marca": "intel",
        "type": "procesador",
        "color": "sky"
    },
    {
        "id": "IC9100F", 
        "name": "Intel Core i3 9100F",
        "compatibility": [ "PB360", "PH310" ],
        "supplier": [
            {
                "name": "supplierA",
                "price": 1000
            },
            {
                "name": "supplierB",
                "price": 2000
            }
        ],
        "marca": "intel",
        "type": "procesador",
        "color": "sky"
    },
    {
        "id": "IC9400F", 
        "name": "Intel Core i5 9400F",
        "compatibility": [ "PB360", "PH310", "PZ390X" ],
        "supplier": [
            {
                "name": "supplierA",
                "price": 1000
            },
            {
                "name": "supplierB",
                "price": 2000
            }
        ],
        "marca": "intel",
        "type": "procesador",
        "color": "sky"
    },
    {
        "id": "IC9700K", 
        "name": "Intel Core i7 9700K",
        "compatibility": [ "PZ390X", "PZ390" ],
        "supplier": [
            {
                "name": "supplierA",
                "price": 1000
            },
            {
                "name": "supplierB",
                "price": 2000
            }
        ],
        "marca": "intel",
        "type": "procesador",
        "color": "sky"
    },
    {
        "id": "IC9900K", 
        "name": "Intel Core i9 9900K",
        "compatibility": [ "PZ390" ],
        "supplier": [
            {
                "name": "supplierA",
                "price": 1000
            },
            {
                "name": "supplierB",
                "price": 2000
            }
        ],
        "marca": "intel",
        "type": "procesador",
        "color": "sky"
    }, 
    {
        "id": "AR2200", 
        "name": "AMD RYZEN 3 2200G",
        "compatibility": [ "A320K" ],
        "supplier": [
            {
                "name": "supplierA",
                "price": 1000
            },
            {
                "name": "supplierB",
                "price": 2000
            }
        ],
        "marca": "amd",
        "type": "procesador",
        "color": "pink"
    },
    {
        "id": "AR2400", 
        "name": "AMD RYZEN 5 2400G",
        "compatibility": [ "A320K", "PB450", "PB450" ],
        "supplier": [
            {
                "name": "supplierA",
                "price": 1000
            },
            {
                "name": "supplierB",
                "price": 2000
            }
        ],
        "marca": "amd",
        "type": "procesador",
        "color": "pink"
    },
    {
        "id": "AR2600", 
        "name": "AMD RYZEN 5 2600",
        "compatibility": [ "X470", "PB450" ],
        "supplier": [
            {
                "name": "supplierA",
                "price": 1000
            },
            {
                "name": "supplierB",
                "price": 2000
            }
        ],
        "marca": "amd",
        "type": "procesador",
        "color": "pink"
    },
    {
        "id": "AR2700", 
        "name": "AMD RYZEN 7 2700",
        "compatibility": [ "X470" ],
        "supplier": [
            {
                "name": "supplierA",
                "price": 1000
            },
            {
                "name": "supplierB",
                "price": 2000
            }
        ],
        "marca": "amd",
        "type": "procesador",
        "color": "pink"
    }
]