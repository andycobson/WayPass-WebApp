package com.example.WayPass.repository;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBSaveExpression;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBScanExpression;
import com.amazonaws.services.dynamodbv2.model.AttributeValue;
import com.amazonaws.services.dynamodbv2.model.ExpectedAttributeValue;
import com.example.WayPass.entity.Account;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class AccountRepository {

    @Autowired
    private DynamoDBMapper dynamoDBMapper;

    public Account save(Account account){
        dynamoDBMapper.save(account);
        return account;
    }

    public Account getAccountById(String accountId){
        return dynamoDBMapper.load(Account.class, accountId);
    }

    public List<Account> getAllAccounts() {
        return dynamoDBMapper.scan(Account.class, new DynamoDBScanExpression());
    }

    public String delete(String accountId){
        Account acc = dynamoDBMapper.load(Account.class, accountId);
        dynamoDBMapper.delete(acc);
        return "Account deleted";
    }

    public String update(String accountId, Account account){
        dynamoDBMapper.save(account,
                new DynamoDBSaveExpression()
                        .withExpectedEntry("accountId",
                                    new ExpectedAttributeValue(
                                            new AttributeValue().withS(accountId)
                                    )));
        return accountId;
    }

}
