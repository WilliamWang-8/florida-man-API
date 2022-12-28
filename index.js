const app = require('express')();
const PORT = 8080;
app.listen(
    PORT,
    () => console.log(`It's open at http://localhost:${PORT}`)
)
function getQuote() {
    const quotes = [
        "Florida Man Wears `Fuck The Police` Shirt to Court, Wins Case.",
        "Florida Man Attacked During Selfie with Squirrel.",
        "Florida Man in `No, Seriously, I have Drugs` T-Shirt Arrested for Possesion of Drugs.",
        "Florida Man Suspected of Using Private Plane to Draw Giant Radar Penis.",
        "Florida Man Charged With Assault With a Deadly Weapon After Throwing Alligator Through Wendy's Drive-Thru Window.",
        "Florida Man steals a car, realizes a baby is in it, drops baby off safely, and makes his get away.",
        "Florida cop claims Burger King put dirt on his food - investigation reveals it was seasoning.",
        "Florida Men planned to `shoot down` Hurricaine Irma",
        "Florida Man Gets Tired of Waiting at Hospital, Steals Ambulance, Drives Home.",
        "Florida Man Tries to Rob Gamestop While Wearing Transparent Bag on His Head.",
        "Florida man breaks into jail to hang out with friends",
        "Florida Man Apparently Painting Ant-Hillary Messages on Tampa Bay Crabs",
        "Florida man hides in swamp after high-speed police chase, gets stuck and licked by police dog",
        "Florida Man Who Tried to `Run` to Bermuda in Inflatable Bubble Rescued by Coast Guard, Again",
        "FLorida Man Denies Drinking and Driving, Says He Only Swigged Bourbon at Stop Signs",
        "Florida Man Leaves Job at Burger King, Steals `All Their Nuggets` Because `Fuck it.`",
        "Florida Man arrested for assaulting girlfriend with fried chicken.",
        "Florida Man Climbs on Playground Equipment to Tell Children Where Babies Come From.",
        "Florida Man steals neigbour's peacock, gets chased by angry birds.",
        "Florida Man Manages to Misspell `School` on Warning Sign...Twice.",
        "Florida Man Stabs Tourist Despite Having No Arms.",
        "Florida Man Arrested for Driving Stolen Vehicle While Monkey Clings to Chest.",
        "Florida Man ripped urinal from restuarant bathroom wall, ran away naked into woods.",
        "Florida Man Pauses Police Chase to Rehydrate With Stolen Capri Sun, Says Smoking Crack Makes Him Thirsty.",
        "Florida Man Gives Police `Exonerating` Dash Cam Video Following Traffic Incident, Accidentally Includes Video of Him Robbing Beauty Store.",
        "Florida Man Admits Killing Goat and Drinking Its Blood for Pagan Sacrifice, Would Still Like to be Senator.",
        "Florida Man Arrestd For Eating Pancakes in Middle of Crosswalk.",
        "Florida Man Disguises Himself in Bull Costume as He Tries to Burn Down Former Lover's House With Pasta Sauce.",
        "Florida Man Steals BMW After He's Told He Can't Buy It With Food Stamps.",
        "Florida Man Arrested in Local Park for `Practicing Karate`on Swans.",
        "Florida Man (18-year-old) Arrested For Posing As Doctor, Opening Fakse Doctor's Office.",
        "Florida Man Says He Danced on Patrol Car in Order to Escape Vampires.",
        "Florida Man Kicked Out of Trump Rally for Wearing Penis on Head.",
        "Florida Man Asks Trooper If He Can Leave Scene of Crash to Get More Meth.",
        "FLorida Man Pulls Out Plastic Badge and Tells Speeding Motorcyclist, `I the police`.",
        "Florida Man Can't Produce Driver's License For Police, Shows Them Mixtape Instead.",
        "Florida Man Wearing Mop on His Head `Terrifies` Neighbours With Demands For Eggs.",
        "Florida Man Drives Date to Sports Bar on Stolen Walmart Mobility Scooter.",
        "Florida Man calls 991 to report himself drunk driving.",
        "Florida Man Burns Himself Dancing Naked Around Fire for Solstice Ritual.",
        "Florida Man Asks Public For Help Looking for His 18-Foot Banana.",
        "Florida man arrested for attempting to steal a power pole by strapping it on top of his SUV.",
        "Florida Man Tries to Leave Strip Club; Crashes Into House, Runs Himself Over.",
        "Florida Man in Tutu Breaks Into Farmer's Market to Consume Fruit and Soda.",
        "Florida Man Arrested for Illegal Ride on Manatee.",
        "Florida Man Calls 91 to Report Lack of Vodka.",
        "Florida Man Filmed Stealing Dozens of Pigeons While Wearing Trash Bag and Bucket on His Head.",
        "Florida Man steals bees because he thought they were 'abandoned.'",
        "FLorida Man Wanders Naked Through Neighbourhood Holding Cooking Oil, Erection; Says He's Aroused by Rain.",
        "Florida Man Caught Trying to Smuggle Dead Alligator in Car.",
        "Florida Man Blows Off Fingers With Firework A Day Early Since He's Unable to Wait Until July 4th.",
        "Florida Man (Underwear-Clad) Spends 4 Hours Yelling at People From Roof of Wendy's.",
        "Florida Man with handlebar mustache assaults women on plane, starts a fight with several passangers, yells at police to tase him and `you'll see what happen,` then gets tased 10 times.",
        "Florida Man's Apartment has a Dozen Stolen Zoo Animals-Discovered by Police.",
        "Florida Man Tries to Walk Out of Walmart with $172 Worth of Steak and Lobster Stuffed Down His Pants.",
        "Florida Man Arrested For Beating Drag Queen With Tiki Torch While Dressed as Member of KKK, Now Running for Mayor.",
        "Florida Man Bursts Into Ex's Delivery Room, Fights Her New Boyfriend as She's Giving Birth.",
        "Florida Man Proudly Claims He's The First Man Ever to Vape Semen.",
        "Florida Man Bored, Calls 9-11 to Talk About Hitler."
    ];
    return quotes[Math.floor(Math.random() * quotes.length)];
}
app.get("/quote", (req, res) => {
    res.status(200).send({
        quote: getQuote()
    })
});