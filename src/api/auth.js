export async function registerUser(username, password) {
  const response = await fetch(
    "https://strangers-things.herokuapp.com/api/2209-FTB-PT-WEB-FT/users/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    }
  );
  const result = await response.json();
  return result;
}

export async function loginUser(username, password) {
  const response = await fetch(
    "https://strangers-things.herokuapp.com/api/2209-FTB-PT-WEB-FT/users/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    }
  );
  const result = await response.json();
  return result;
}

export async function fetchMe(token) {
  const response = await fetch(
    "https://strangers-things.herokuapp.com/api/2209-FTB-PT-WEB-FT/users/me",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const result = await response.json();
  return result;
}

export async function fetchPosts() {
  const response = await fetch(
    "https://strangers-things.herokuapp.com/api/2209-FTB-PT-WEB-FT/posts"
  );
  const result = await response.json();
  return result;
}

export const createPost = async (token, title, description, price) => {
  const response = await fetch(
    "https://strangers-things.herokuapp.com/api/2209-FTB-PT-WEB-FT/posts",
    {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        post: {
          title,
          description,
          price,
        },
      }),
    }
  );
  const result = await response.json();
  return result;
};

export const deletePost = async (token, id) => {
  const response = await fetch(
    `https://strangers-things.herokuapp.com/api/2209-FTB-PT-WEB-FT/posts/${id}`,

    {
      method: "Delete",
      headers: {
        "Content-Type": "application.json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const result = await response.json();
  return result;
};

export const userInfo = async (token) => {
  const response = await fetch(
    "https://strangers-things.herokuapp.com/api/2209-FTB-PT-WEB-FT/users/me",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const result = await response.json();
  return result;
};

export const messages = async (token, id) => {
  const response = await fetch(
    `https://strangers-things.herokuapp.com/api/COHORT-NAME/posts/${id}/messages`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        message: {
          content,
        },
      }),
    }
  );

  const result = await response.json();
  return result;
};
