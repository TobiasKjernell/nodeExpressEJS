class Animal {
    constructor(name, weight, length, description, food, lifespan, found, group) {
        this.name = name;
        this.weight = weight;
        this.length = length;
        this.description = description;
        this.lifespan = lifespan;
        this.found = found;
        this.group = group;
        this.food = food;
    }
}

const mammals = [new Animal('Echida',
    '10kg',
    '76cm',
    "Echidnas, also called spiny anteaters, are walking contradictions. They are mammals, but they lay eggs. They are often classified as long- or sort-beaked, but don't have beaks at all, in the traditional sense; they have fleshy noses that can be either on the long side or rather short.They don't really look like true anteaters (Myrmecophaga tridactyla), either, and they are not closely related to them. They are spiny, though; their bodies are covered with hollow, barbless quills. Echidnas are monotremes, egg-laying mammals. The only other living monotreme is the platypus.",
    "insects such as ants and termites, beetle larvae and worms",
    "50 years",
    "Throughout Australia",
    "Mammals"
),
new Animal('Tasmanian Devil',
    '10kg',
    '70cm',
    "The Tasmanian devil (Sarcophilus harrisii) (palawa kani: purinina)[3] is a carnivorous marsupial of the family Dasyuridae. Until recently, it was only found on the island state of Tasmania, but it has been reintroduced to New South Wales in mainland Australia, with a small breeding population. The size of a small dog, the Tasmanian devil became the largest carnivorous marsupial in the world, following the extinction of the thylacine in 1936. It is related to quolls, and distantly related to the thylacine. It is characterised by its stocky and muscular build, black fur, pungent odour, extremely loud and disturbing screech, keen sense of smell, and ferocity when feeding. The Tasmanian devil's large head and neck allow it to generate among the strongest bites per unit body mass of any extant predatory land mammal. It hunts prey and scavenges on carrion.",
    "A predator, then eat meat from other animals such as wallabies and wombats",
    "5 years",
    "Tasmania",
    "Mammals"
),
new Animal('Quokka',
    "3kg",
    "50cm",
    "The Quokka, Setonix brachyurus, was described by early Dutch explorer, Willem de Vlamingh, 'as a kind of rat as big as a common cat'. His first sighting of the Quokka was on an island off the mouth of the Swan River. He named the island Rottenest ('rat nest') in honour of this sighting. The island is now known as Rottnest Island. Essentially the Quokka looks very much like other wallabies.It has short, very coarse and thick grey-brown fur over most of the body with lighter parts underneath. Its facial features consist of a naked nose on a short, broad face with rounded furry ears.The tail is relatively short and mostly devoid of hair. In contrast, the hair on the feet extends to cover its claws.",
    "Plant eaters, they munch on shrubs and grasses",
    "10 years",
    "Only found on Rottnest Island and a few places on mainland Western Australia",
    "Mammals"
)]

const birds = [new Animal('Cassowary',
    "44kg",
    "1.7cm",
    "It’s not hard to imagine that cassowaries are descended from dinosaur ancestors. The largest cassowaries can stand as high as six feet and weigh up to 160 pounds.   These large birds cannot fly, but their extremely powerful legs propel them at great speeds. They are strong swimmers and can move quickly on both land and water. Cassowaries are shy and they are usually hard to spot, at least in their natural rain forest habitats. They are not overly aggressive, and attacks are rare. But they can do a lot of damage if they are provoked or angered. Cassowary attacks have occasionally been deadly, including a recent one which occurred in 2019, at a private collection of caged birds in Florida",
    "Plants matter like fruit, insects and small animals like mice amd lizards",
    "20 years",
    "Queensland",
    "Bird"
),
new Animal('Kookaburra',
    "300g",
    "43cm",
    "Native to the eucalyptus forests of eastern Australia, the laughing kookaburra is the largest member of the Kingfisher family, with females weighing up to one pound and growing to 43 cm in length. Its beak can reach 10 cm long and is used to snatch a variety of invertebrates and small vertebrates, including the occasional small snake. Since being introduced in western Australia and New Zealand, the kookaburra has angered farmers by preying on their fowl. The laughing kookaburra has dark brown wing plumage and a white head and underside. Dark brown eye stripes run across its face and its upper bill is black. Its reddish-coloured tail is patterned with black bars.",
    "Insects and smalll animals including snakes, frogs and lizards",
    "20 years",
    "Australia wide",
    "Bird"
),
new Animal('Yellow Tailed Black Cockatoo',
    "900g",
    "65cm",
    "It has a short crest on the top of its head. Its plumage is mostly brownish black and it has prominent yellow cheek patches and a yellow tail band. The body feathers are edged with yellow giving a scalloped appearance. The adult male has a black beak and pinkish-red eye-rings, and the female has a bone-coloured beak and grey eye-rings. In flight, yellow-tailed black cockatoos flap deeply and slowly, with a peculiar heavy fluid motion. Their loud, wailing calls carry for long distances. The whiteae is found south of Victoria to the East of South Australia and is smaller in size. The yellow-tailed black cockatoo is found in temperate forests and forested areas across south and central eastern Queensland to southeastern South Australia, including a very small population persisting in the Eyre Peninsula.[4] Two subspecies are recognised, although Tasmanian and southern mainland populations of the southern subspecies xanthanotus may be distinct enough from each other to bring the total to three. Birds of subspecies funereus (Queensland to eastern Victoria) have longer wings and tails and darker plumage overall, while those of xanthanotus (western Victoria, South Australia and Tasmania) have more prominent scalloping.",
    "Fruit, seeds and other plant material",
    "41 years",
    "SE Australia",
    "Bird"
)]

const reptiles = [new Animal('Frill-necked Lizard',
    "1kg",
    "90cm",
    "When this unique creature feels threatened, it rises on its hind legs, opens its yellow-coloured mouth, unfurls the colorful, pleated skin flap that encircles its head, and hisses. If an attacker is unintimidated by these antics, the lizard simply turns tail, mouth and frill open, and bolts, legs splaying left and right. It continues its deliberate run without stopping or looking back until it reaches the safety of a tree.",
    "Small insects and spiders",
    "20 years",
    "Northern Australia",
    "Reptile"
),
new Animal("Hawksbill Turtle",
    "50kg",
    "80cm (carapace)",
    "The Hawksbill Sea Turtle gets its common name from the distinctive mouth, which resembles a bird’s beak. The shell, or carapace, is covered in large overlapping scutes, which are a distinctive brown/green/amber background with lighter brown streaks throughout. At the edge of the carapace they overlap in such a way as to form a serrated edge. The turtle has an elongated head and flippers which have two visible claws on the end. The flippers and head are covered in large green, brown or yellow scales. The average adult female weighs 50 kg and their carapace (shell) is approximately 80 cm in length.",
    "Other animals (sponges & jellyfish), sea plants",
    "50 years",
    "Tropical coasts of Queensland, Northern Territory and Western Australia.",
    "Reptile"
),
new Animal("Perentie",
    "20kg",
    "2.5meter",
    "The perentie (Varanus giganteus) is the largest monitor lizard or goanna native to Australia. It is one of the largest living lizards on earth, after the Komodo dragon, Asian water monitor, crocodile monitor, and intersecting by size with Nile monitor.[3] Found west of the Great Dividing Range in the arid areas of Australia, it is rarely seen, because of its shyness and the remoteness of much of its range from human habitation. The species is considered to be a least-concern species according to the International Union for Conservation of Nature. Its status in many Aboriginal cultures is evident in the totemic relationships, and part of the Ngiṉṯaka dreaming, as well as bush tucker. It was a favoured food item among desert Aboriginal tribes, and the fat was used for medicinal and ceremonial purposes.",
    "Plants matter like fruit, insects and small animals like mice amd lizards",
    "20 years",
    "Deserts",
    "Reptile"
)]

const allAnimals = [...reptiles, ...mammals, ...birds];

export { birds, mammals, reptiles, allAnimals };

/* HELPER

if you want to import all animals in a script, you import like this at the top:

import { allAnimals } from "./data/animals.js";

only the birds: 

import { birds } from "./data/animals.js";

only the mammals.

import { mammals } from "./data/animals.js";

only the reptiles.

import { reptiles } from "./data/animals.js";

You can also pick 2 different animal-arrays by:

import { repiles, birds } from "./data/animals.js";

*/