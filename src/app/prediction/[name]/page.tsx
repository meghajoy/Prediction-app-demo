//To fetch data
const getPredictedAge = async (name: string) =>{
    const res = await fetch(`https://678f696249875e5a1a91bbca.mockapi.io/api/age/age${name}`);
    return res.json()
};
// const getPredictedGender = async (name: string) =>{
//     const res = await fetch(`https://678f696249875e5a1a91bbca.mockapi.io/api/age/age${name}`);
//     return res.json()
// };
// const getPredictedPhone = async (name: string) =>{
//     const res = await fetch(`https://678f696249875e5a1a91bbca.mockapi.io/api/age/age${name}`);
//     return res.json()
// };

interface Params{
    params: {name:string};
}
export default async function Page({ params }: Params){        //params are values that you can pass onto the URL
    const ageData = getPredictedAge(params.name);

    const [age] = await Promise.all([ageData]);
    return(
        <div className="box2">
            <div className="box2_heading">
                <h1>Personal Info</h1>
                <h3>Age: {age?.age}</h3>
                {/* <div>Phone number: {phone?.phone}</div> */}
            </div>
        </div>
    );
}