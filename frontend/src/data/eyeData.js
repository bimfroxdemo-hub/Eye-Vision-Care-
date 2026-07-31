import {
  Eye,
  Sun,
  Moon,
  Droplets,
  Shield,
  Focus,
  Layers,
  CircleDot,
  Aperture,
  Brain,
  Lightbulb,
  Heart,
} from "lucide-react";

// Eye Parts Data
export const eyeParts = [
  {
    name: "Cornea",
    hindi: "कॉर्निया",
    description:
      "The clear, dome-shaped front surface of the eye. It acts as the eye's outermost lens and plays a major role in focusing light that enters the eye.",
    function: "Refracts (bends) light as it enters the eye, providing about 65-75% of the eye's total focusing power.",
    icon: Shield,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    position: "Front of the eye",
    funFact: "The cornea is one of the few tissues in the body that contains no blood vessels.",
  },
  {
    name: "Iris",
    hindi: "आइरिस",
    description:
      "The colored part of the eye that surrounds the pupil. It controls the amount of light entering the eye by adjusting the size of the pupil.",
    function: "Acts like a camera shutter, expanding and contracting to control how much light enters through the pupil.",
    icon: Aperture,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    position: "Behind the cornea",
    funFact: "Each person's iris pattern is unique, even more so than fingerprints.",
  },
  {
    name: "Pupil",
    hindi: "पुतली",
    description:
      "The black circular opening in the center of the iris. It appears black because light entering the pupil is absorbed by the tissues inside the eye.",
    function: "Controls the amount of light that reaches the retina. It dilates in dim light and constricts in bright light.",
    icon: CircleDot,
    color: "from-gray-700 to-gray-900",
    bgColor: "bg-gray-50",
    borderColor: "border-gray-200",
    position: "Center of the iris",
    funFact: "Your pupils can dilate up to 55% when you look at someone you love.",
  },
  {
    name: "Lens",
    hindi: "लेंस",
    description:
      "A clear, flexible structure located behind the iris and pupil. It changes shape to fine-tune the focus of light onto the retina.",
    function: "Fine-focuses light onto the retina by changing its curvature - a process called accommodation.",
    icon: Focus,
    color: "from-yellow-500 to-amber-500",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200",
    position: "Behind the iris",
    funFact: "The lens continues to grow throughout your life, adding layers like an onion.",
  },
  {
    name: "Retina",
    hindi: "रेटिना",
    description:
      "A thin layer of tissue at the back of the eye containing millions of light-sensitive cells (photoreceptors) called rods and cones.",
    function: "Converts light into electrical signals that are sent to the brain through the optic nerve for visual processing.",
    icon: Layers,
    color: "from-red-500 to-rose-500",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    position: "Back of the eye",
    funFact: "The retina contains about 120 million rod cells and 6 million cone cells.",
  },
  {
    name: "Optic Nerve",
    hindi: "ऑप्टिक नर्व",
    description:
      "A bundle of more than 1 million nerve fibers that carries visual information from the retina to the brain's visual cortex.",
    function: "Transmits electrical impulses from the retina to the brain, where they are interpreted as images.",
    icon: Brain,
    color: "from-purple-500 to-violet-500",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    position: "Back of the eye to brain",
    funFact: "The optic nerve contains approximately 1.2 million nerve fibers.",
  },
  {
    name: "Sclera",
    hindi: "श्वेतपटल",
    description:
      "The white, opaque outer covering of the eye. It provides structural support and protection for the inner parts of the eye.",
    function: "Protects the internal structures and maintains the shape of the eye. It also serves as an attachment for eye muscles.",
    icon: Shield,
    color: "from-slate-400 to-slate-600",
    bgColor: "bg-slate-50",
    borderColor: "border-slate-200",
    position: "Outer covering",
    funFact: "The sclera covers about 80% of the eye's surface area.",
  },
  {
    name: "Vitreous Humor",
    hindi: "काचाभ द्रव",
    description:
      "A clear, gel-like substance that fills the space between the lens and the retina. It makes up about 80% of the eye's volume.",
    function: "Maintains the eye's round shape, provides structural support, and allows light to pass through to the retina.",
    icon: Droplets,
    color: "from-cyan-500 to-teal-500",
    bgColor: "bg-cyan-50",
    borderColor: "border-cyan-200",
    position: "Inside the eye",
    funFact: "The vitreous humor is 99% water but has a gel-like consistency due to collagen fibers.",
  },
];

// How Vision Works Steps
export const visionSteps = [
  {
    step: 1,
    title: "Light Enters",
    description: "Light rays from objects enter the eye through the cornea, the clear front surface.",
    icon: Sun,
    color: "from-yellow-400 to-orange-500",
  },
  {
    step: 2,
    title: "Pupil Adjusts",
    description: "The iris adjusts the pupil size to control the amount of light entering the eye.",
    icon: Aperture,
    color: "from-green-400 to-emerald-500",
  },
  {
    step: 3,
    title: "Lens Focuses",
    description: "The lens changes shape to precisely focus light rays onto the retina at the back.",
    icon: Focus,
    color: "from-blue-400 to-cyan-500",
  },
  {
    step: 4,
    title: "Retina Captures",
    description: "Photoreceptor cells in the retina convert light into electrical signals.",
    icon: Layers,
    color: "from-red-400 to-rose-500",
  },
  {
    step: 5,
    title: "Signal Travels",
    description: "The optic nerve carries these electrical signals from the retina to the brain.",
    icon: Brain,
    color: "from-purple-400 to-violet-500",
  },
  {
    step: 6,
    title: "Brain Interprets",
    description: "The brain's visual cortex processes the signals and creates the images we 'see'.",
    icon: Lightbulb,
    color: "from-teal-400 to-emerald-500",
  },
];

// Common Eye Conditions
export const eyeConditions = [
  {
    name: "Myopia (Nearsightedness)",
    hindi: "निकट दृष्टिदोष",
    description: "Distant objects appear blurry while close objects are clear. The eyeball is too long or the cornea is too curved.",
    symptoms: ["Blurry distance vision", "Squinting", "Eye strain", "Headaches"],
    treatment: "Corrective lenses, contact lenses, or LASIK surgery",
    icon: "👓",
  },
  {
    name: "Hyperopia (Farsightedness)",
    hindi: "दूर दृष्टिदोष",
    description: "Close objects appear blurry while distant objects may be clearer. The eyeball is too short or the cornea is too flat.",
    symptoms: ["Blurry near vision", "Eye strain", "Difficulty reading", "Headaches"],
    treatment: "Corrective lenses, contact lenses, or refractive surgery",
    icon: "🔍",
  },
  {
    name: "Astigmatism",
    hindi: "दृष्टिवैषम्य",
    description: "Blurred vision at all distances caused by an irregularly shaped cornea or lens that prevents light from focusing properly.",
    symptoms: ["Blurred vision", "Distorted vision", "Eye discomfort", "Headaches"],
    treatment: "Corrective lenses, toric contact lenses, or LASIK",
    icon: "👁️",
  },
  {
    name: "Cataracts",
    hindi: "मोतियाबिंद",
    description: "Clouding of the eye's natural lens, leading to decreased vision. Common in older adults but can occur at any age.",
    symptoms: ["Cloudy vision", "Faded colors", "Glare sensitivity", "Poor night vision"],
    treatment: "Surgery to replace the cloudy lens with an artificial lens",
    icon: "🌫️",
  },
  {
    name: "Glaucoma",
    hindi: "काला मोतिया",
    description: "A group of eye diseases that damage the optic nerve, often due to elevated eye pressure. Can lead to vision loss.",
    symptoms: ["Gradual vision loss", "Tunnel vision", "Eye pain", "Halos around lights"],
    treatment: "Eye drops, laser treatment, or surgery to reduce eye pressure",
    icon: "⚠️",
  },
  {
    name: "Dry Eye Syndrome",
    hindi: "सूखी आँख",
    description: "A condition where the eyes don't produce enough tears or the tears evaporate too quickly, causing discomfort.",
    symptoms: ["Dryness", "Burning sensation", "Redness", "Blurred vision"],
    treatment: "Artificial tears, prescription drops, or lifestyle changes",
    icon: "💧",
  },
];

// Eye Care Tips
export const eyeCareTips = [
  {
    title: "Follow 20-20-20 Rule",
    description: "Every 20 minutes, look at something 20 feet away for 20 seconds to reduce digital eye strain.",
    icon: Eye,
    color: "from-teal-500 to-emerald-500",
  },
  {
    title: "Wear UV Protection",
    description: "Always wear sunglasses with 100% UV protection when outdoors to protect from harmful ultraviolet rays.",
    icon: Sun,
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Get Adequate Sleep",
    description: "Ensure 7-8 hours of sleep daily. Your eyes need rest to stay healthy and maintain clear vision.",
    icon: Moon,
    color: "from-indigo-500 to-purple-500",
  },
  {
    title: "Stay Hydrated",
    description: "Drink plenty of water throughout the day to maintain proper tear production and eye moisture.",
    icon: Droplets,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Eat Eye-Healthy Foods",
    description: "Include leafy greens, fish, eggs, and citrus fruits in your diet for essential eye nutrients.",
    icon: Heart,
    color: "from-red-500 to-rose-500",
  },
  {
    title: "Regular Eye Checkups",
    description: "Visit your eye doctor at least once a year for comprehensive eye exams to detect problems early.",
    icon: Shield,
    color: "from-green-500 to-emerald-500",
  },
];

// Amazing Eye Facts
export const eyeFacts = [
  "Your eyes can distinguish approximately 10 million different colors.",
  "The eye is the fastest muscle in the body — it can blink in about 100-150 milliseconds.",
  "Your eyes process about 36,000 pieces of information every hour.",
  "The human eye can detect a candle flame from 1.7 miles away.",
  "About 80% of what we learn is through our eyes.",
  "Your eyes are composed of more than 2 million working parts.",
  "The eye's cornea is the only part of the human body that has no blood supply.",
  "Eyes began to develop 550 million years ago — the simplest eyes were flat patches of protein.",
  "Your retina actually sees the world upside down — your brain flips the image.",
  "Newborns don't produce tears until they are about 6-8 weeks old.",
];