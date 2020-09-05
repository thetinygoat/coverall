const StoryCard = ({
  author, title, description, url, img, time,
}) => (
  <div className="col-start-2 col-span-10 py-4">
    <div className="grid grid-cols-12">
      <h2 className="font-bold text-lg col-span-7">{title}</h2>
      <div
        style={{
          backgroundImage: `url(${img})`,
          width: '95px',
          height: '95px',
          backgroundSize: 'cover',
        }}
        className="rounded-sm col-start-9"
      />
    </div>
    <button type="button" className="w-1/2 mt-2 bg-yellow-400 p-1 rounded-sm">FULL STORY</button>
    <div className="bg-gray-400 mt-2 p-2 rounded-sm">
      Trusted
    </div>
  </div>
);

export default StoryCard;
