{
    // Promise

    type Todo = {
        id: number;
        userId: number;
        title: string;
        completed: boolean;
      };

    const getTodo = async (): Promise<Todo> => {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos/1"
        );
    
        const data = await response.json();
        return data;
        // console.log(data);
      };
    
      getTodo();

    // const createPromise = (): Promise<string> => {
    //     return new Promise<string>((resolve, reject) => {
    //         const data: string = "something";
    //         if(data){
    //             resolve(data)
    //         }else{
    //             reject('failed to load data')
    //         }
    //     })
    // }

    // // Calling promise

    // const showData = async(): Promise<string> =>{
    //     const data: string = await createPromise();
    //     // console.log(data);
    //     return data;
        
    // }

    // showData();

    type Something = { something: string };

  // simulate
  const createPromise = (): Promise<Something> => {
    return new Promise<Something>((resolve, reject) => {
      const data: Something = { something: "something" };
      if (data) {
        resolve(data);
      } else {
        reject("failed to load data");
      }
    });
  };

  // calling create promise function
  const showData = async (): Promise<Something> => {
    const data: Something = await createPromise();
    return data;
    // console.log(data);
  };

  showData();


}