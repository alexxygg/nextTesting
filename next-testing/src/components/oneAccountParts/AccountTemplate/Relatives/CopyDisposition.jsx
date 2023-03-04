function CopyDisposition({ account, selectedDispositions, handleCopyClick }) {
  const noteToCopy = `${account.RELATIVE_1_PH1} - ${selectedDispositions.RELATIVE_1_DISPOSITION} , ${account.RELATIVE_1_PH2} - ${selectedDispositions.RELATIVE_2_DISPOSITION} , ${account.RELATIVE_1_PH3} - ${selectedDispositions.RELATIVE_3_DISPOSITION} , ${account.RELATIVE_2_PH1} - ${selectedDispositions.RELATIVE_4_DISPOSITION} , ${account.RELATIVE_2_PH2} - ${selectedDispositions.RELATIVE_5_DISPOSITION} , ${account.RELATIVE_2_PH3} - ${selectedDispositions.RELATIVE_6_DISPOSITION} , ${account.RELATIVE_3_PH1} - ${selectedDispositions.RELATIVE_7_DISPOSITION} , ${account.RELATIVE_3_PH2} - ${selectedDispositions.RELATIVE_8_DISPOSITION} , ${account.RELATIVE_3_PH3} - ${selectedDispositions.RELATIVE_9_DISPOSITION} , ${account.RELATIVE_4_PH1} - ${selectedDispositions.RELATIVE_10_DISPOSITION} , ${account.RELATIVE_4_PH2} - ${selectedDispositions.RELATIVE_11_DISPOSITION} , ${account.RELATIVE_4_PH3} - ${selectedDispositions.RELATIVE_12_DISPOSITION} , ${account.RELATIVE_5_PH1} - ${selectedDispositions.RELATIVE_13_DISPOSITION} , ${account.RELATIVE_5_PH2} - ${selectedDispositions.RELATIVE_14_DISPOSITION} , ${account.RELATIVE_5_PH3} - ${selectedDispositions.RELATIVE_15_DISPOSITION}`;

  const copyDispositionsNote = async () => {
    try {
      await navigator.clipboard.writeText(noteToCopy);
      document.getElementById("popUp").style.backgroundColor = "blue";
      document.getElementById("popUp").textContent = "Summary Copied!";
      setTimeout(() => {
        document.getElementById("popUp").style.backgroundColor = "";

        document.getElementById("popUp").textContent = "Copied!";
      }, 2000);
      await handleCopyClick();
    } catch (err) {
      console.error(err);
    }
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
        Copy summary
      </button>
    </>
  );
}

export default CopyDisposition;
