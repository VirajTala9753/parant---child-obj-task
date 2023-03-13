const objectNeedsToBeCheck = {
  model: "sonet",
  brand: "kia",
};

const comparisonObject = {
  address: {
    line_1: "address line 1",
    line_2: "address line 2",
    street: "line_1",
    house_no: "house_no",
    city: "city",
    state: "state",
    zip: "zip",
    country: "country",
  },
  family: {
    members_count: 3,
    female_count: 1,
    male_count: 2,
    members: [
      {
        first_name: "algo",
        second_name: "challenge",
        age: 24,
        gender: "male",
      },
      {
        first_name: "algo_1",
        second_name: "challenge_1",
        age: 35,
        gender: "female",
      },
      {
        first_name: "algo_2",
        second_name: "challenge_2",
        age: 40,
        gender: "male",
      },
    ],
  },
  more_details: {
    details: {
      members: [
        {
          first_name: "algo",
          second_name: "challenge",
          age: 24,
          gender: "male",
        },
        {
          first_name: "algo_1",
          second_name: "challenge_1",
          age: 35,
          gender: "female",
        },
      ],
    },
    cars: {
      owned: [
        {
          brand: "kia",
          model: "sonet",
        },
      ],
      rent: [
        {
          brand: "tesla",
          model: "son",
        },
      ],
    },
  },
  cars: {
    owned: [
      {
        brand: "kia",
        model: "sonet",
      },
    ],
    rent: [
      {
        brand: "tesla",
        model: "son",
      },
    ],
  },
};

const obj = Object.keys(comparisonObject);

const findPath = (ob, key, value) => {
  const filterArray = [];
  const path = [];
  const keyExists = (obj) => {
    // console.log("obj", !obj);
    // console.log(
    //   typeof obj !== "object" && !Array.isArray(obj),
    //   "sfhusdgfjksgkshgfhykse"
    // );
    if (!obj || (typeof obj !== "object" && !Array.isArray(obj))) {
      //   console.log(obj, "if");
      return false;
    } else if (obj.hasOwnProperty(key) && obj[key] === value) {
      //   console.log(obj[key] , obj ,
      //   "obj key");
      filterArray.push(obj);

      return true;
    } else if (Array.isArray(obj)) {
      let a = path.pop();
      //   console.log(a, "a");
      //   console.log("path", path);
      let parentKey = path.length ? a : "";
      //   console.log(parentKey, "ghjk");

      for (let i = 0; i < obj.length; i++) {
        path.push(`${parentKey}[${i}]`);
        const result = keyExists(obj[i], key);
        // if (result) {
        //   return result;
        // }
        path.pop();
      }
    } else {
      for (const k in obj) {
        // console.log(k, "k");
        path.push(k);
        const result = keyExists(obj[k]);
        // if (result) {
        //   return result;
        // }
        path.pop();
      }
    }

    return false;
  };

  keyExists(ob);
  console.log(filterArray, "filterArray");
  //   console.log(path, "path");

  return path.join(".");
};

for (const key in objectNeedsToBeCheck) {
    console.log(key , "key")
  findPath(comparisonObject, key, objectNeedsToBeCheck[key]);
}
