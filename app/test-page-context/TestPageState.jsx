import { atom, useAtom } from "jotai";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const enrollmentAtom = atom({
  consent: false,
  aces: false,
  basicNeeds: false,
  referral: false
});

export const setEnrollmentAtom = atom(null, (get, set, key, status) => {
  const updatedStatus = { ...get(enrollmentAtom), [key]: status };
  set(enrollmentAtom, updatedStatus);
});

export const readEnrollmentStore = atom((get) => get(enrollmentAtom));

const TestPageDisplay = ({ data }) => {
  const router = useRouter();
  return (
    <div>
      <br />
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <br />
      <br />
      <button
        onClick={() => {
          router.push("/test-page");
        }}
      >
        Go to page not covered by provider
      </button>
    </div>
  );
};

const TestPageState = () => {
  const [enrollmentAtom] = useAtom(readEnrollmentStore);

  useEffect(() => {
    return () => {
      console.log("unsubbing...");
    };
  }, []);

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <TestPageDisplay data={enrollmentAtom} />
      <br />
      <br />
      <br />
    </div>
  );
};

export default TestPageState;
