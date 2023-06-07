import { useStore } from "jotai";
import { setEnrollmentAtom } from "./TestPageState";

const TestPageAction = () => {
  const enrollmentStore = useStore();
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <button
        onClick={() => {
          console.log("Clicked");
          enrollmentStore.set(setEnrollmentAtom, "consent", true);
        }}
      >
        Update Consent
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          console.log("Clicked");
          enrollmentStore.set(setEnrollmentAtom, "aces", true);
        }}
      >
        Update aces
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          console.log("Clicked");
          enrollmentStore.set(setEnrollmentAtom, "basicNeeds", true);
        }}
      >
        Update basic needs screening
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          console.log("Clicked");
          enrollmentStore.set(setEnrollmentAtom, "referral", true);
        }}
      >
        Update referral
      </button>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default TestPageAction;
