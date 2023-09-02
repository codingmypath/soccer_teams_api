const express = require('express');
const app = express();
const PORT = 8000;
const cors = require('cors');

app.use(cors());

const teams = {
    'austin fc': {
        'stadium': 'idk',
        'image': 'https://i.ibb.co/XfH4fjq/Austin-FC-logo.png',
    },
    'charlotte fc': {
        'stadium': 'idk',
        'image': 'https://i.ibb.co/ygFzd8p/Charlotte-FC-logo.png',
    },
    'chicago fire ': {
        'stadium': 'idk',
        'image': 'https://i.ibb.co/pf720Tj/Chicago-Fire-logo.png',
    },
    'colorado rapids': {
        'stadium': 'Citigroup, Inc.',
        'image': 'https://i.ibb.co/pvX7pSR/Colorado-Rapids-logo.png',
    },
    'CAT': {
        'name': 'Caterpillar, Inc.',
        'dividend': 5.20,
        'pay': 'quarterly',
        'sector': 'Industrials',
        'image': 'https://i.ibb.co/3YbCQJw/Caterpillar-Logo.png',
    },
    'CSCO': {
        'name': 'Cisco Systems',
        'dividend': 1.56,
        'pay': 'quarterly',
        'sector': 'Technology',
        'image': 'https://i.ibb.co/ZBnmdXc/cisco-logo-transparent.png',
    },
    'D': {
        'name': 'Dominion Energy, Inc',
        'dividend': 2.67,
        'pay': 'quarterly',
        'sector': 'Utilities',
        'image': 'https://i.ibb.co/R3WHxmS/dominion.png',
    },
    'F': {
        'name': 'Ford Motor Company',
        'dividend': 0.60,
        'pay': 'quarterly',
        'sector': 'Consumer Cyclical',
        'image': 'https://i.ibb.co/T4KtsjY/Ford-Logo.png',
    },
    'JNJ': {
        'name': 'Johnson & Johnson',
        'dividend': 4.76,
        'pay': 'quarterly',
        'sector': 'Healthcare',
        'image': 'https://i.ibb.co/DDfBLRJ/Johnson-and-Johnson-logo.png',
    },
    'KHC': {
        'name': 'The Kraft Heinz Compay',
        'dividend': 1.60,
        'pay': 'quarterly',
        'sector': 'Consumer Defensive',
        'image': 'https://i.ibb.co/N2624kw/kraft-foods-logo.jpg',
    },
    'KO': {
        'name': 'Coca-Cola Company',
        'dividend': 1.84,
        'pay': 'quarterly',
        'sector': 'Consumer Defensive',
        'image': '',
    },
    'O': {
        'name': 'Realty Income Corporation',
        'dividend': 3.066,
        'pay': 'Monthly',
        'sector': 'Real Estate',
        'image': 'https://i.ibb.co/ZHTzZ24/realty-income-corporation-logo-vector.png',

    },
    'PEP': {
        'name': 'PepsiCo',
        'dividend': 5.06,
        'pay': 'quarterly',
        'sector': 'Consumer Defensive',
        'image': 'https://i.ibb.co/mBj7Rgt/Pepsi-logo-2014-svg.png',
    },
    'SBUX': {
        'name': 'Starbucks Corporation',
        'dividend': 2.12,
        'pay': 'quarterly',
        'sector': 'Consumer Cyclical',
        'image': 'https://i.ibb.co/7gSRQjt/Starbucks-Corporation-Logo-2011-svg.png',
    },
    'SPG': {
        'name': 'Simon Property Group',
        'dividend': 7.40,
        'pay': 'quarterly',
        'sector': 'Real Estate',
        'image': 'https://i.ibb.co/Fb8nsq7/Simon-Property-Group.jpg',
    },
    'TGT': {
        'name': 'Target Corporation',
        'dividend': 4.40,
        'pay': 'quarterly',
        'sector': 'Consumer Defensive',
        'image': 'https://i.ibb.co/z2D7p4s/Target-logo-1.png',
    },
    'WMT': {
        'name': 'Walmart Inc.',
        'dividend': 2.28,
        'pay': 'quarterly',
        'sector': 'Consumer Defensive',
        'image': 'https://i.ibb.co/DRJHGMc/cdn-corporate-walmart.png',
    }
}

app.get('/api/:teamName', (req, res) => {
    const ticker = req.params.teamName;
    if (teams[ticker]) {
        res.json(teams[ticker])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on PORT ${PORT}`)
})