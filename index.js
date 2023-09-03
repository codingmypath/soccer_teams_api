const express = require('express');
const app = express();
const PORT = 8000;
const cors = require('cors');

app.use(cors());

const teams = {
    'atlanta united': {
        'stadium': '	Mercedes-Benz-Stadium',
        'image': 'https://i.ibb.co/JvnhqzS/Atlanta-MLS.png',
    },
    'austin fc': {
        'stadium': 'Q2Stadium',
        'image': 'https://i.ibb.co/XfH4fjq/Austin-FC-logo.png',
    },
    'charlotte fc': {
        'stadium': 'idk',
        'image': 'https://i.ibb.co/ygFzd8p/Charlotte-FC-logo.png',
    },
    'fc cincinnati': {
        'stadium': 'TQL Stadium',
        'image': 'https://i.ibb.co/V9g1xwN/FC-Cincinnati-primary-logo.png',
    },
    'chicago fire ': {
        'stadium': 'Soldier Field',
        'image': 'https://i.ibb.co/pf720Tj/Chicago-Fire-logo.png',
    },
    'colorado rapids': {
        'stadium': '',
        'image': 'https://i.ibb.co/pvX7pSR/Colorado-Rapids-logo.png',
    },
    'columbus crew': {
        'stadium': 'Mapfre Stadium',
        'image': 'https://i.ibb.co/xghKC3R/Columbus-Crew-logo-2021.png',
    },
    'dc united': {
        'stadium': '',
        'image': 'https://i.ibb.co/Qbw04xW/D-C-United-logo-2016.png',
    },
    'fc dallas': {
        'stadium': 'Toyota Stadium',
        'image': 'https://i.ibb.co/pXs8gsj/FC-Dallas-logo.png',
    },
    'houston dynamo fc': {
        'stadium': '',
        'image': 'https://i.ibb.co/dbJDtmg/Houston-Dynamo-FC-logo.png',
    },
    'sporting kansas city': {
        'stadium': '',
        'image': 'https://i.ibb.co/TTYrJrz/skc.png',
    },
    'la galaxy': {
        'stadium': '',
        'image': 'https://i.ibb.co/0yfHJBF/Los-Angeles-Galaxy-logo.png',
    },
    'lafc': {
        'stadium': '',
        'image': 'https://i.ibb.co/sHPVT6N/Los-Angeles-Football-Club.png',
    },
    'inter miami cf': {
        'stadium': '',
        'image': 'https://i.ibb.co/cyG47m6/Inter-Miami-CF-logo.png',
    },
    'minnesota united': {
        'stadium': '',
        'image': 'https://i.ibb.co/zHQXZVr/Minnesota-United-FC-MLS-Primary-logo.png',
    },
    'cf montreal': {
        'stadium': '',
        'image': 'https://i.ibb.co/wC2MHSn/CF-Montreal-logo-2023.png',
    },
    'nashville sc': {
        'stadium': '',
        'image': 'https://i.ibb.co/s35H68J/Nashville-SC-logo-2020.png',
    },
    'new england revolution': {
        'stadium': '',
        'image': 'https://i.ibb.co/FV7rZP4/New-England-Revolution-2021-logo.png',
    },
    'new york red bulls': {
        'stadium': '',
        'image': 'https://i.ibb.co/Fh1VYHh/New-York-Red-Bulls-logo.png',
    },
    'new york city football club': {
        'stadium': '',
        'image': 'https://i.ibb.co/0njvQWx/New-York-City-FC.png',
    },
    'orlando city': {
        'stadium': '',
        'image': 'https://i.ibb.co/vzQhq3m/Orlando-City-2014.png',
    },
    'philadelphia union': {
        'stadium': '',
        'image': 'https://i.ibb.co/ssBKZF0/Philadelphia-Union-2018-logo.png',
    },
    'portland timbers': {
        'stadium': '',
        'image': 'https://i.ibb.co/tct39fB/Portland-Timbers-logo.png',
    },
    'real salt lake': {
        'stadium': '',
        'image': 'https://i.ibb.co/3BzJ2yc/Real-Salt-Lake-2010.png',
    },
    'san jose earthquakes': {
        'stadium': '',
        'image': 'https://i.ibb.co/vV6dVjh/San-Jose-Earthquakes-2014.png',
    },
    'seattle sounders fc': {
        'stadium': '',
        'image': 'https://i.ibb.co/pZmfBkQ/Seattle-Sounders-FC.png',
    },
    'st. louis city sc': {
        'stadium': '',
        'image': 'https://i.ibb.co/7Jv44GZ/St-Louis-City-SC-logo.png',
    },
    'toronto fc': {
        'stadium': '',
        'image': 'https://i.ibb.co/8BR0ySj/Toronto-FC-Logo.png',
    },
    'vancouver whitecaps fc': {
        'stadium': '',
        'image': '',
    },
    'arsenal': {
        'stadium': '',
        'image': '',
    },
    'brighton': {
        'stadium': '',
        'image': '',
    },
    'chelsea': {
        'stadium': '',
        'image': '',
    },
    'liverpool': {
        'stadium': 'Anfield',
        'image': '',
    },
    'manchester city': {
        'stadium': 'idk...',
        'image': '',
    },
    'manchester united': {
        'stadium': '',
        'image': '',
    },
    'newcastle': {
        'stadium': '',
        'image': '',
    },
    'tottenham hotspur': {
        'stadium': '',
        'image': '',
    },
    'west ham united': {
        'stadium': '',
        'image': '',
    },
    'atletico madrid': {
        'stadium': '',
        'image': '',
    },
    'barcelona': {
        'stadium': '',
        'image': '',
    },
    'real madrid': {
        'stadium': '',
        'image': '',
    },
    
}

app.get('/api/:teamName', (req, res) => {
    const ticker = req.params.teamName.toLowerCase();
    if (teams[ticker]) {
        res.json(teams[ticker])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on PORT ${PORT}`)
})