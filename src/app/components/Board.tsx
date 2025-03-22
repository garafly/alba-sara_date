type BoardProps = {
    onStartTrivia: () => void;
    onStartPlaylistHaze: () => void;
    onStartEmoji: () => void;
    onStartTruth: () => void;
    onResetScores: () => void;
  };
  
  const Board = ({
    onStartTrivia,
    onStartPlaylistHaze,
    onStartEmoji,
    onStartTruth,
    onResetScores,
  }: BoardProps) => {
    const buttons = [
      { label: 'Trivia', key: 'trivia', action: onStartTrivia },
      { label: 'Playlist-haze', key: 'playlist', action: onStartPlaylistHaze },
      { label: 'Emoji le movie', key: 'emoji', action: onStartEmoji },
      { label: 'Truth or dare', key: 'truth', action: onStartTruth },
    ];
  
    return (
      <div className="flex flex-col items-center gap-4 mt-10">
        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
          {buttons.map((btn, index) => (
            <button
              key={index}
              onClick={btn.action}
              className="bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition"
            >
              {btn.label}
            </button>
          ))}
        </div>
  
        <button
          onClick={onResetScores}
          className="mt-6 px-4 py-2 mt-40 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Reset Scores
        </button>
      </div>
    );
  };
  
  export default Board;
  
  
  