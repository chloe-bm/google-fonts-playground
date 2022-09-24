import React from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { FontItem, useFetchFontsQuery } from "./features/fonts/fonts-slice-api";
import { Block } from "baseui/block";
import Navbar from "./Navbar";
import Scrollable from "./components/Scrollable";
import { Input } from "baseui/input";
import { loadFonts } from "./load-font";
import InfiniteScrolling from "./components/InfiniteScrolling";
import { Spinner } from "baseui/spinner";
import useCombinedQuery from "./app/useCombinedQuery";

const defaultFont = {
  id: "font__dUK2d4RgtqEAQfMDOJNgTuk",
  family: "Flamenco",
  full_name: "Flamenco Regular",
  postscript_name: "Flamenco-Regular",
  preview: "https://ik.imagekit.io/lh/fonts/v1/6JoWcCkRY0DLxJeVemOLJPj2.png",
  style: "Flamenco-Regular",
  url: "https://fonts.gstatic.com/s/flamenco/v13/neIIzCehqYguo67ssaWGHK06UY30.ttf",
  category: "display",
  user_id: "",
};

function App() {
  const [pageNumber, setPageNumber] = React.useState(1);
  const { data = [], isFetching } = useFetchFontsQuery();
  // const { data = [], isFetching } = useCombinedQuery(pageNumber);

  const [state, setState] = React.useState({
    currentFont: "",
  });

  React.useEffect(() => {
    applyFont(defaultFont);
  }, []);

  const applyFont = async (font: FontItem) => {
    await loadFonts([
      {
        name: font.postscript_name,
        url: font.url,
      },
    ]);
    setState({ ...state, currentFont: font.postscript_name });
  };

  const fetchData = () => {
    const { data = [], isFetching } = useFetchFontsQuery(1);
    console.log({ data });
    if (!isFetching) {
      setPageNumber(pageNumber + 1);
    }
  };

  return (
    <Block
      $style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <Block
        $style={{
          display: "flex",
          flex: 1,
          background: "#ffffff",
        }}
      >
        <Block
          $style={{ width: "320px", display: "flex", flexDirection: "column" }}
        >
          <Block $style={{ padding: "1.5rem 1rem 1rem" }}>
            <Input placeholder="Search" size="compact" />
          </Block>
          <Scrollable>
            <InfiniteScrolling
              isLoading={false}
              fetchData={fetchData}
              hasMore={true}
            >
              {data.map((font, index) => {
                return (
                  <Block
                    $style={{
                      display: "flex",
                      alignItems: "center",
                      height: "36px",
                      paddingLeft: "1rem",
                      ":hover": {
                        backgroundColor: "rgb(233,233,233)",
                        cursor: "pointer",
                      },
                    }}
                    onClick={() => applyFont(font)}
                    key={index}
                  >
                    <img src={font.preview} />
                  </Block>
                );
              })}
            </InfiniteScrolling>
          </Scrollable>
        </Block>
        <Block
          $style={{
            flex: 1,
            background: "#ecf0f1",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Block
            $style={{
              fontFamily: state.currentFont,
              fontSize: "52px",
              background: "#ffffff",
              minHeight: "240px",
              width: "75%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "2rem",
              textAlign: "center",
            }}
          >
            Hello World, I am testing google fonts.
          </Block>
        </Block>
      </Block>
    </Block>
  );
}

export default App;
