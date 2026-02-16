import { Component } from '@angular/core';

interface RetailerLocation {
  name: string;
  address: string;
  parish: string;
}

@Component({
  selector: 'app-retail-locations',
  templateUrl: './retail-locations.component.html',
  styleUrls: ['./retail-locations.component.css'],
})
export class RetailLocationsComponent {
  selectedParish = 'All';

  locations: RetailerLocation[] = [
    {
      name: 'Papine Grab N Go',
      address: '1-3 Chandos Pl',
      parish: 'Kingston and St. Andrew',
    },
    {
      name: 'Hookah Express Store',
      address: '6 South Avenue, Dragon Centre',
      parish: 'Kingston and St. Andrew',
    },
    {
      name: 'Total Qwick Mart Cross Roads',
      address: '23 Half Way Tree Road',
      parish: 'Kingston and St. Andrew',
    },
    {
      name: 'Qwick Mart Worldtron',
      address: '2 Chelsea Ave',
      parish: 'Kingston and St. Andrew',
    },
    {
      name: 'Wongs Texaco',
      address: '94 Old Hope Road',
      parish: 'Kingston and St. Andrew',
    },
    {
      name: 'Total Red Hills',
      address: '105 1/2 Red Hills Rd',
      parish: 'Kingston and St. Andrew',
    },
    {
      name: 'Rubis Dunrobin',
      address: '62 Constant Spring Rd',
      parish: 'Kingston and St. Andrew',
    },
    {
      name: 'Total Dunrobin',
      address: '85 Constant Spring Rd',
      parish: 'Kingston and St. Andrew',
    },
    {
      name: 'Rubis Liguanea',
      address: '138 Old Hope Road',
      parish: 'Kingston and St. Andrew',
    },
    {
      name: 'Fesco Ferry',
      address: 'Mandela Highway',
      parish: 'Kingston and St. Andrew',
    },
    {
      name: 'Rubis Washington Blvd',
      address: '301 Washington Blvd',
      parish: 'Kingston and St. Andrew',
    },
    {
      name: 'Fesco Stoney Hill',
      address: 'Main Street Stony Hill Square',
      parish: 'Kingston and St. Andrew',
    },
    {
      name: 'Fesco Beechwood Avenue',
      address: '7-9 Beechwood Avenue',
      parish: 'Kingston and St. Andrew',
    },
    {
      name: 'Brooklyn Supermarket - Sirac',
      address: '11 Hope Rd',
      parish: 'Kingston and St. Andrew',
    },
    {
      name: 'Lees Food Fair - Sirac',
      address: '86 Elizabeth Ave',
      parish: 'Kingston and St. Andrew',
    },
    {
      name: 'Grab N Go Cross Roads',
      address: '27 halfway tree road',
      parish: 'Kingston and St. Andrew',
    },
    {
      name: 'Ambassador Bar Liguanea',
      address: '148 Old Hope Road, Kingston',
      parish: 'Kingston and St. Andrew',
    },
    {
      name: 'Total New Kingston',
      address: '29 Dominica Drive',
      parish: 'Kingston and St. Andrew',
    },
    {
      name: 'The Club',
      address: 'Halfway Tree Mall',
      parish: 'Kingston and St. Andrew',
    },
    {
      name: "Grab N Go Mary Brown'S Corner",
      address: '141 1/2 Constant Spring Road',
      parish: 'Kingston and St. Andrew',
    },
    {
      name: 'Rubis Eastwood Park',
      address: 'Molynes road',
      parish: 'Kingston and St. Andrew',
    },
    {
      name: 'Wil-Glen Pharmacy',
      address: '11 Duhaney drive',
      parish: 'Kingston and St. Andrew',
    },
    {
      name: 'Rubis Water Lane',
      address: '1 Water lane, Downtown Kingston',
      parish: 'Kingston and St. Andrew',
    },
    {
      name: "Ryan'S Total Golden Spring",
      address: 'Main Street Golden Spring',
      parish: 'Kingston and St. Andrew',
    },
    {
      name: 'Yaad Man Petroleum',
      address: 'Water Lane',
      parish: 'Kingston and St. Andrew',
    },
    {
      name: 'Total Tyrell Spanish Town Road',
      address: '250 Spanish Town Road',
      parish: 'Kingston and St. Andrew',
    },
    {
      name: 'Ready Stock Wholesale',
      address: '1-3 Duhaney Drive',
      parish: 'Kingston and St. Andrew',
    },
    {
      name: 'Ready Stock Bar',
      address: '1-3 Duhaney Drive',
      parish: 'Kingston and St. Andrew',
    },
    {
      name: 'Total Mona',
      address: '2 Palmoral Ave, Mona',
      parish: 'Kingston and St. Andrew',
    },
    {
      name: 'Leighton Smith & Co. Rpl',
      address: '135 Spanish town road',
      parish: 'Kingston and St. Andrew',
    },
    {
      name: 'Source Foods Portmore Pines',
      address: 'Hungway Mall, Portmore Pines',
      parish: 'St. Catherine',
    },
    {
      name: 'Total Brunswick & Eltham',
      address: 'Brunswick Ave, Spanish town',
      parish: 'St. Catherine',
    },
    {
      name: 'Fesco Braeton',
      address: 'Lot 60 Congreve Park, Portmore',
      parish: 'St. Catherine',
    },
    {
      name: 'Fesco Free Town (Old Harbour)',
      address: 'Bodles Cres, Free Town',
      parish: 'St. Catherine',
    },
    {
      name: 'Fesco Angels',
      address: 'Angels plaza, Spanish town',
      parish: 'St. Catherine',
    },
    {
      name: 'Aml Angels',
      address: 'A1 Angels Estate, Spanish town',
      parish: 'St. Catherine',
    },
    {
      name: 'Rubis Independence City',
      address: 'Lot 18 Independence City, Gregory Park',
      parish: 'St. Catherine',
    },
    {
      name: 'Rubis Bridgehouse',
      address: '1 Barrett st, Spanish town',
      parish: 'St. Catherine',
    },
    {
      name: 'Total Featherbed',
      address: '77 old harbour street, Spanish town',
      parish: 'St. Catherine',
    },
    {
      name: 'Petcom Parkway Portmore',
      address: '1 Portmore parkway',
      parish: 'St. Catherine',
    },
    {
      name: 'Petcom Phoenix Fuel',
      address: 'Cedar manor Portmore',
      parish: 'St. Catherine',
    },
    {
      name: 'Total Ultra Mac Energy',
      address: '3a Brunswick ave, Spanish Town',
      parish: 'St. Catherine',
    },
    {
      name: 'S & M Candle Stop',
      address: '34a Passage Fort Drive Portmore',
      parish: 'St. Catherine',
    },
    {
      name: 'Bourbon Paradise',
      address: 'Shop 2 Portmore Town Center Plaza Portmore',
      parish: 'St. Catherine',
    },
    {
      name: 'Jampet Superlube Gas Station',
      address: '48 Brunswick Ave, Spanish Town',
      parish: 'St. Catherine',
    },
    {
      name: 'Wongs Texaco St Johns Road',
      address: '102 St Johns Road, Spanish Town',
      parish: 'St. Catherine',
    },
    {
      name: 'Fesco Mandeville',
      address: '2 Manchester Road, Mandeville',
      parish: 'Manchester',
    },
    {
      name: 'Artie Phillips Rubis',
      address: '5 Caledonia Rd, Mandeville',
      parish: 'Manchester',
    },
    {
      name: 'Jamgas Petcom',
      address: 'Winston Jones Highway, Mandeville',
      parish: 'Manchester',
    },
    {
      name: 'Super Plus Kingsland',
      address: 'Kingsland Spur Tree',
      parish: 'Manchester',
    },
    {
      name: 'Boot Coconut Grove',
      address: 'Coconut Grove, Ocho Rios',
      parish: 'St. Ann',
    },
    {
      name: 'Boot Drax Hall',
      address: '5, Greenwich Park',
      parish: 'St. Ann',
    },
    {
      name: 'Rubis Ocho Rios',
      address: 'Corner or Milford Road & DaCosta Dr, Ocho Rios',
      parish: 'St. Ann',
    },
    {
      name: 'Lfa Country Store',
      address: 'Richmond Estate',
      parish: 'St. Ann',
    },
    {
      name: 'Total Grab N Go Discovery Bay',
      address: 'Main Street, Discovery Bay',
      parish: 'St. Ann',
    },
    {
      name: 'Fesco Golden Grove',
      address: 'Golden Grove',
      parish: 'St. Ann',
    },
    {
      name: 'Chukka Seville',
      address: 'Chukka Cove, Seville',
      parish: 'St. Ann',
    },
    {
      name: '8 Rivaz Lounge',
      address: 'Beecham Plaza, 76 Main St, Ocho Rios',
      parish: 'St. Ann',
    },
    {
      name: 'Oceans 11',
      address: "Watering Hole, Lot #6, Fisherman's Point Road, Ocho Rios",
      parish: 'St. Ann',
    },
    {
      name: 'Chukka Island Village',
      address: 'Island village, Ocho Rios',
      parish: 'St. Ann',
    },
    {
      name: 'Fesco Ocho Rios',
      address: '1 Hogholi, Ocho Rios',
      parish: 'St. Ann',
    },
    {
      name: 'Pump N Munch Priory',
      address: 'North Cost Highway, Priory',
      parish: 'St. Ann',
    },
    {
      name: 'Texaco Grab N Go Fairview',
      address: 'Alice Eldemire Avenue Bogue, Fairview',
      parish: 'St. James',
    },
    {
      name: 'Rubis St. James Street',
      address: '38 St James St, Montego Bay',
      parish: 'St. James',
    },
    {
      name: 'Rubis Coral Gardens',
      address: 'Coral Gardens Ave',
      parish: 'St. James',
    },
    {
      name: 'Thrifty Coral Gardens',
      address: 'Rose Hall, Lot 669 Half Moon St, Montego Bay',
      parish: 'St. James',
    },
    {
      name: 'Express Supermarket',
      address: 'Whitter Village',
      parish: 'St. James',
    },
    {
      name: 'Ocean View Liquor',
      address: '32 Jimmy Cliff Blvd, Montego Bay',
      parish: 'St. James',
    },
    {
      name: 'Rubis Westgate',
      address: 'Cathrine Hall Main road',
      parish: 'St. James',
    },
    {
      name: 'Rubis Howard Cooke',
      address: 'Howard Cooke blvd',
      parish: 'St. James',
    },
    {
      name: 'Rubis Mega Mart',
      address: 'W Green Ave, Cathrine Hall',
      parish: 'St. James',
    },
    {
      name: 'Thrifty Falmouth',
      address: 'Market St, Falmouth',
      parish: 'Trelawny',
    },
    {
      name: 'Chukka Good Hope',
      address: 'Good Hope Estate, Falmouth',
      parish: 'Trelawny',
    },
    {
      name: 'Rubis Falmouth',
      address: '3 Tharpe St, Falmouth',
      parish: 'Trelawny',
    },
    {
      name: 'Flamingo Trelawny',
      address: 'Flamingo Beach, Trelawny',
      parish: 'Trelawny',
    },
    {
      name: 'Falmouth Mystic Lagoon Tours',
      address: 'Rock, Falmouth',
      parish: 'Trelawny',
    },
    {
      name: 'Petcom Negril',
      address: 'Norman Manley Boulevard Negril',
      parish: 'Westmoreland',
    },
    {
      name: 'Texaco Grab N Go Savanna La-Mar',
      address: '14 Lewis Street, Sav-anna-la-mar',
      parish: 'Westmoreland',
    },
    {
      name: 'Lfa Country Store Negril',
      address: 'Sunshine Village Complex West End Negril',
      parish: 'Westmoreland',
    },
    {
      name: 'Valries Creative Center',
      address: 'Boardwalk Shopping Center, Negril',
      parish: 'Westmoreland',
    },
    {
      name: 'Rubis Negril',
      address: 'Nompariel Road, Negril',
      parish: 'Westmoreland',
    },
    {
      name: 'Rubis Sav Anna La Mar',
      address: 'Lewis Street, Sav Anna La Mar',
      parish: 'Westmoreland',
    },
    {
      name: 'Yaadman Sav-Anna-La-Mar',
      address: "Dunbar's River, Sav-anna-la-mar",
      parish: 'Westmoreland',
    },
    {
      name: 'Fesco Green Island',
      address: 'Orange Bay Estate',
      parish: 'Hanover',
    },
    {
      name: 'Chukka Sandy Bay',
      address: 'Sandy Bay, Lucea',
      parish: 'Hanover',
    },
    {
      name: 'Total Freetown',
      address: 'Freetown Main road',
      parish: 'Clarendon',
    },
    {
      name: 'Kennys Total May Pen',
      address: '54 Main Street, May Pen',
      parish: 'Clarendon',
    },
    {
      name: 'Mobile Treasures',
      address: 'Millenium Mall, Mineral Heights',
      parish: 'Clarendon',
    },
    {
      name: 'Jamgas May Pen',
      address: '146 Muirhead Ave',
      parish: 'Clarendon',
    },
    {
      name: 'Wongs Texaco Sandy Bay',
      address: 'Bustamante Highway, Sandy Bay',
      parish: 'Clarendon',
    },
    {
      name: "Braham'S Texaco",
      address: '15 Harbour Street Port Antonio',
      parish: 'Portland',
    },
    {
      name: "Bryan'S Bay Total",
      address: "Bryan's Bay Port Antonio",
      parish: 'Portland',
    },
    {
      name: 'Texaco Long Bay',
      address: 'Long Bay, Portland',
      parish: 'Portland',
    },
    {
      name: "Paulwell'S Service Stations Texaco",
      address: 'Top Bay, Annoto Bay',
      parish: 'St. Mary',
    },
    {
      name: 'Morant Bay Texaco',
      address: '24 Queen Street',
      parish: 'St. Thomas',
    },
    {
      name: 'Mid Island Service Station',
      address: 'Gutters',
      parish: 'St. Elizabeth',
    },
    {
      name: 'Fesco Lacovia',
      address: 'Main street, Lacovia',
      parish: 'St. Elizabeth',
    },
    {
      name: 'Sxxon Service Station',
      address: 'Sandy Ground',
      parish: 'St. Elizabeth',
    },
    {
      name: 'Gas Mart',
      address: '135 Main Street, Santa Cruz',
      parish: 'St. Elizabeth',
    },
  ];

  get parishes(): string[] {
    const values = new Set(this.locations.map((location) => location.parish));
    return ['All', ...Array.from(values).sort()];
  }

  get filteredLocations(): RetailerLocation[] {
    if (this.selectedParish === 'All') {
      return this.locations;
    }

    return this.locations.filter(
      (location) => location.parish === this.selectedParish,
    );
  }
}
