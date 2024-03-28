import { useLoaderData } from "react-router-dom";
import { getReadBooks } from "../../utility/storage";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { useEffect, useState } from "react";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
    Z`;
};

const TriangleBar = (props) => {
  // eslint-disable-next-line react/prop-types
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PagesToRead = () => {
  const booksData = useLoaderData();

  const readBookId = getReadBooks();

  const [readBooks, setReadBooks] = useState([]);

  useEffect(() => {
    const matchingReadBooks = booksData.filter((book) =>
      readBookId.includes(book.bookId.toString())
    );
    setReadBooks(matchingReadBooks);
  }, [readBookId]);

  return (
    <div className="container mx-auto mt-[40px]">
      <div className="bg-[#13131308] rounded-3xl p-[30px]">
        <div className="grid grid-cols-1">
          <BarChart
            width={1500}
            height={400}
            data={readBooks}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="bookName" />
            <YAxis />
            <Tooltip />
            <Bar
              dataKey="totalPages"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {readBooks.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default PagesToRead;
