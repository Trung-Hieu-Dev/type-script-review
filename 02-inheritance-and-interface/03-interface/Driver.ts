import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";
import { Coach } from "./Coach";

let cricketCoach = new CricketCoach();
let golfCoach = new GolfCoach();

let coaches: Coach[] = []
coaches.push(cricketCoach)
coaches.push(golfCoach)

for (const coach of coaches) {
    console.log(coach.getDailyWorkout());
}
