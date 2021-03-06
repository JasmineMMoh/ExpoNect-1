import importer from "../api/importer";
import exporter from "../api/exporter";

const catchError = (error) => {
  if (error?.response?.data) {
    return error.response.data;
  }
  return { success: false, error: error.message };
};

export const signup = async (values) => {
  try {
    const { data } = await importer.post("/importers/create", {
      ...values,
    });
    return data;
  } catch (error) {
    return catchError(error);
  }
};

export const signin = async (values) => {
  try {
    const { data } = await importer.post("/importers/login", {
      ...values,
    });
    return data;
  } catch (error) {
    return catchError(error);
  }
};
export const forgetPassword = async (email) => {
  try {
    const { data } = await importer.post("/importers/forgot-password", {
      email,
    });
    return data;
  } catch (error) {
    return catchError(error);
  }
};

export const verifyEmail = async (otp, importerId) => {
  try {
    const { data } = await importer.post("/importers/verify-email", {
      otp,
      importerId,
    });
    return data;
  } catch (error) {
    return catchError(error);
  }
};

export const verifyEmailExporter = async (otp, exporterId) => {
  try {
    const { data } = await exporter.post("/exporters/verify-email", {
      otp,
      exporterId,
    });
    return data;
  } catch (error) {
    return catchError(error);
  }
};

export default catchError;
