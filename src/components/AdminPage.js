import { useState } from "react";

function AdminPage() {
  

  const [multiplier,setMultiplier] = useState(1);

  //check in date
  const [highCostDateStart, setHighCostDateStart] = useState(null);

  //check out date
  const [highCostDateEnd, setHighCostDateEnd] = useState(null);

  //Save
  const saveMultiplierToLocalStorage = () => {
    //All value ready
    if(multiplier !== 1 && highCostDateStart !== null && highCostDateEnd !== null){
        //save
        localStorage.setItem("highValueDate" , JSON.stringify({highCostDateStart,highCostDateEnd,multiplier}));
        alert("save completed");
    }
    else {
        alert('fill in all the field');
    }
  };

  return (
    <>
      <div className="bg-slate-400 flex flex-auto">
        <div>
          <span className="mx-auto">High cost date: </span>
          <input
            className="bg-gray-50 border border-gray-300 mx-auto text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="date"
            placeholder="value increase start date"
            onChange={(e) => setHighCostDateStart(e.currentTarget.value) }
          ></input>
        </div>

        <div>
          <span>High cost date end: </span>
          <input
            className="bg-gray-50 border border-gray-300 mx-auto text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="date"
            placeholder="value increase end date"
            onChange={(e) => setHighCostDateEnd(e.currentTarget.value) }
          ></input>
        </div>

        <div>
          <span>Value: </span>
          <input
            className="bg-gray-50 border border-gray-300 mx-auto text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="number"
            step="1"
            placeholder="value"
            onChange={(e) => setMultiplier(e.currentTarget.value)}
          ></input>
        </div>

        <button
          className="text-white bg-green-600 hover:bg-green-400 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-3"
          onClick={() => saveMultiplierToLocalStorage()}
        >
          add value
        </button>
      </div>
    </>
  );
}

export default AdminPage;
