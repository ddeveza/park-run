import { JSDOM } from "jsdom";
import MainComponent from "./MainComponent";
const getParkrunUser = async () => {
  const users = [
    219820, 1400649, 3256891, 5849177, 557046, 7527028, 6907303, 735938,
    5430614, 4745314, 2523975, 5973265, 2873382, 7780850, 6170062, 2972944,
    2903164, 2643210, 6450176, 3780081, 6762085, 5872274, 6830520,
  ];

  const randomNum = Math.floor(Math.random() * users.length) + 1;
  const randomUser = users[randomNum];
  try {
    const response = await fetch(
      `https://www.parkrun.com.au/parkrunner/${randomUser}/`
    );
    const html = await response.text();
  
    const dom = new JSDOM(html);
    const document = dom.window.document;
  
    const name = document.querySelector("h2")?.textContent;
    const parkruns = document.querySelector("h3")?.textContent;
  
    //total credits
    const volunteer = document.getElementById("volunteer-summary");
    const volunteer_table = volunteer.nextElementSibling;
    const volunteer_tfoot = volunteer_table.querySelector("tfoot");
    const first_cell = volunteer_tfoot.querySelector("td");
  
    let total_credits = first_cell.nextElementSibling.textContent;
  
    //event summaries
  
    const summary = document.getElementById("event-summary");
    const summary_table = summary.nextElementSibling;
    const summary_tfoot = summary_table.querySelector("tfoot");
    const fifth_cell = summary_tfoot.querySelector("td:nth-child(5)").textContent;
  
    let event_summary = fifth_cell;
  
    const data = [{ name, parkruns, total_credits, event_summary }];
      return data
  }catch (error) {
    console.log({error})
  }
 
};

export default async function Home() {
  const parkrun_user = await getParkrunUser();
  return (
    <MainComponent parkrun_user={parkrun_user}/>
  );
}
