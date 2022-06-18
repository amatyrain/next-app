#!/usr/bin/env bash

echo "--- pwd ---"
pwd
echo "--- ls ---"
ls
echo "パッケージをインストールします。"
# react-bootstrap
if grep "react-bootstrap@" yarn.lock; then
    :
else
    yarn add react-bootstrap bootstrap
fi

# --dev typescript
if grep "typescript@" yarn.lock; then
    :
else
    yarn add --dev typescript
fi

# --dev @types/react
if grep "@types/react@" yarn.lock; then
    :
else
    yarn add --dev @types/react
fi

# --dev @types/node
if grep "@types/node@" yarn.lock; then
    :
else
    yarn add --dev @types/node
fi

# --dev @types/bootstrap
if grep "@types/bootstrap@" yarn.lock; then
    :
else
    yarn add --dev @types/bootstrap
fi

# blitz
if grep "blitz@" yarn.lock; then
    :
else
    yarn global add blitz
fi

# react-i18next
if grep "react-i18next@" yarn.lock; then
    :
else
    yarn add react-i18next i18next
fi

npm install

npm run dev