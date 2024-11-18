// export const getUserController = async (
//     req: Request,
//     res: Response,
//     next: NextFunction
// ) => {
//     try {
//         const id = req.params.id;

//         const result = users.find((user) => user.id === Number(id));

//         if (!result) {
//             res.status(400).send("user not found");
//             return;
//         }

//         res.status(200).send(result);
//     } catch (error) {
//         next(error);
//     }
// }