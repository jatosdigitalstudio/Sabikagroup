const names = [
    { name: "John", id: 1 },
    { name: "Alice", id: 2 },
    { name: "Bob", id: 3 },
    { name: "Emily", id: 4 },
  ];
  
export default function Card() {
    return (
      <div className="flex items-center gap-4 overflow-hidden p-6">
        {names.map((item) => (
          <div
            key={item.id}
            className="py-36 px-72  bg-blue-500 rounded-lg text-2xl text-white"
          >
            {item.name}
          </div>
        ))}
      </div>
    );
  };