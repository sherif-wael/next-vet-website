import fish from "./fish";
import internalMedicine from "./internal-medicine";
import milk from "./milk";
import anatomy from "./anatomy";
import pathology from "./pathology";
import surgery from "./surgery";
import reproduction from "./reproduction";
import forensic from "./forensic";


export const allSubjects = [
    "fish",
    "internalMedicine",
    "milk",
    "anatomy",
    "pathology",
    "surgery",
    "reproduction",
    "forensic"
]

const data = {
    subjects: {
        fish,
        internalMedicine,
        milk,
        anatomy,
        pathology,
        surgery,
        reproduction,
        forensic
    },
    allSubjects
}

export default data