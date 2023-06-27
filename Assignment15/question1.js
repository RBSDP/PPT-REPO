function printNGE(arr, n)
      {
        var next, i, j;
        for (i = 0; i < n; i++)
        {
          next = -1;
          for (j = i + 1; j < n; j++)
          {
            if (arr[i] < arr[j])
            {
              next = arr[j];
              break;
            }
          }
          document.write(arr[i] + " -- " + next);
          document.write("<br>");
        }
      }