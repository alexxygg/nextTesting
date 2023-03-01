function DispoCopyNote({ object, selectedDispositions }) {
  const noteToCopy = `${object.RELATIVE_1_PH1} - ${selectedDispositions.RELATIVE_1_DISPOSITION} , ${object.RELATIVE_1_PH2} - ${selectedDispositions.RELATIVE_2_DISPOSITION} , ${object.RELATIVE_1_PH3} - ${selectedDispositions.RELATIVE_3_DISPOSITION} , ${object.RELATIVE_2_PH1} - ${selectedDispositions.RELATIVE_4_DISPOSITION} , ${object.RELATIVE_2_PH2} - ${selectedDispositions.RELATIVE_5_DISPOSITION} , ${object.RELATIVE_2_PH3} - ${selectedDispositions.RELATIVE_6_DISPOSITION} , ${object.RELATIVE_3_PH1} - ${selectedDispositions.RELATIVE_7_DISPOSITION} , ${object.RELATIVE_3_PH2} - ${selectedDispositions.RELATIVE_8_DISPOSITION} , ${object.RELATIVE_3_PH3} - ${selectedDispositions.RELATIVE_9_DISPOSITION} , ${object.RELATIVE_4_PH1} - ${selectedDispositions.RELATIVE_10_DISPOSITION} , ${object.RELATIVE_4_PH2} - ${selectedDispositions.RELATIVE_11_DISPOSITION} , ${object.RELATIVE_4_PH3} - ${selectedDispositions.RELATIVE_12_DISPOSITION} , ${object.RELATIVE_5_PH1} - ${selectedDispositions.RELATIVE_13_DISPOSITION} , ${object.RELATIVE_5_PH2} - ${selectedDispositions.RELATIVE_14_DISPOSITION} , ${object.RELATIVE_5_PH3} - ${selectedDispositions.RELATIVE_15_DISPOSITION}`;

  const copyDispositionsNote = () => {
    navigator.clipboard.writeText(noteToCopy);
  };
  return (
    <>
      <button
        onClick={copyDispositionsNote}
        className="weirdBtn marginAuto"
        style={{
          width: "max-content",
          borderLeft: "solid black",
        }}
      >
        Copy all numbers + codes.
      </button>
    </>
  );
}

export default DispoCopyNote;
