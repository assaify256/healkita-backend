import BodyData from "../models/body-data.ts";
import User from "../models/user.ts";

const calculateBodyComposition = ({
    userId,
    method,
}: {
    userId: string;
    method: "US Navy" | "Covert Bailey";
}) => {
    // todo
    // input basic body data
    // input measurement
    // input calculation method
    // output body composition
    const id = User.findOne({
        where: {
            userId: userId,
        },
    });
    if (method === "US Navy") {
        BodyData.findOne({ where: { bodyDataId: id } }).then((bodyData) => {
            console.log(bodyData);
        });
    } else if (method === "Covert Bailey") {
    }
};

export { calculateBodyComposition };

// POST body measurement

// PUT body measurement

// DELETE body measurement

// GET body measurement
