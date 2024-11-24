import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import theme from "./styles/theme";
import { Global, ThemeProvider } from "@emotion/react";
import gStyle from "./styles/GlobalStyles";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // 쿼리가 실패했을 때 재시도하지 않도록 설정
        retry: false,
        // window가 focus되었을 때 자동으로 데이터를 가져오지 않도록 설정
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Global styles={gStyle} />
        <RouterProvider router={router} />
        <span>왜 안 떠</span>
        <ReactQueryDevtools />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
