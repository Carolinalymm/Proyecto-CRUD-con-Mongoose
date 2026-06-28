const User = require("../models/User");
const {
  getUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser
} = require("../controllers/userController");

jest.mock("../models/User");

describe("getUsers", () => {
  test("debe devolver todos los usuarios", async () => {
    const fakeUsers = [
      { name: "Ana", age: 30 },
      { name: "Luis", age: 25 }
    ];

    User.find.mockReturnValue({
      lean: jest.fn().mockResolvedValue(fakeUsers)
    });

    const req = {};
    const res = {
      json: jest.fn()
    };

    await getUsers(req, res);

    expect(User.find).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalledWith(fakeUsers);
  });
});

describe("createUser", () => {
  test("debe crear un usuario", async () => {
    const fakeUser = {
      name: "Ana",
      age: 30
    };

    User.mockImplementation(() => ({
      save: jest.fn().mockResolvedValue(fakeUser)
    }));

    const req = {
      body: fakeUser
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    await createUser(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(fakeUser);
  });
});

describe("getUserById", () => {
  test("debe devolver un usuario por id", async () => {
    const fakeUser = {
      name: "Ana",
      age: 30
    };

    User.findById.mockReturnValue({
      lean: jest.fn().mockResolvedValue(fakeUser)
    });

    const req = {
      params: { id: "123" }
    };

    const res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis()
    };

    await getUserById(req, res);

    expect(User.findById).toHaveBeenCalledWith("123");
    expect(res.json).toHaveBeenCalledWith(fakeUser);
  });
});

describe("updateUser", () => {
  test("debe actualizar un usuario", async () => {
    const updatedData = {
      name: "Ana Updated",
      age: 31
    };

    User.findByIdAndUpdate.mockResolvedValue(updatedData);

    const req = {
      params: { id: "123" },
      body: updatedData
    };

    const res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis()
    };

    await updateUser(req, res);

    expect(User.findByIdAndUpdate).toHaveBeenCalledWith(
      "123",
      updatedData,
      { new: true }
    );

    expect(res.json).toHaveBeenCalledWith(updatedData);
  });
});

describe("deleteUser", () => {
  test("debe eliminar un usuario", async () => {
    const fakeDeletedUser = {
      name: "Ana",
      age: 30
    };

    User.findByIdAndDelete.mockResolvedValue(fakeDeletedUser);

    const req = {
      params: { id: "123" }
    };

    const res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis()
    };

    await deleteUser(req, res);

    expect(User.findByIdAndDelete).toHaveBeenCalledWith("123");
    expect(res.json).toHaveBeenCalledWith({
      message: "Usuario eliminado correctamente"
    });
  });
});