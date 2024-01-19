const { createUserAccount } = require ("./set-up-user-table");

(async () => {
    try {
        await createUserAccount();
        console.log("Tables created successfully");
    } catch (error) {
        console.error("Error creating tables:", error);
    }
}) ();