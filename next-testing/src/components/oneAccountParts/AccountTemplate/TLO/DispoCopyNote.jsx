function DispoCopyNote({ account, selectedDispositions }) {
  const noteToCopy = `${account.TLO_PHONE} - ${selectedDispositions.TLO_1_DISPOSITION} , ${account.TLO_PHONE_2} - ${selectedDispositions.TLO_2_DISPOSITION} , ${account.TLO_PHONE_3} - ${selectedDispositions.TLO_3_DISPOSITION} , ${account.TLO_PHONE_4} - ${selectedDispositions.TLO_4_DISPOSITION} , ${account.TLO_PHONE_5} - ${selectedDispositions.TLO_5_DISPOSITION}`;

  const copyDispositionsNote = () => {
    navigator.clipboard.writeText(noteToCopy);
  };
  return (
    <>
      <button
        onClick={copyDispositionsNote}
        className="weirdBtn marginAuto"
        style={{
          borderRadius: "2rem",
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
