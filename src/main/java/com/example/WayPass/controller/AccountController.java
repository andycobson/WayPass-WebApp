package com.example.WayPass.controller;

import com.example.WayPass.entity.Account;
import com.example.WayPass.entity.PostData;
import com.example.WayPass.repository.AccountRepository;
import com.example.WayPass.service.SecurityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class AccountController {

    @Autowired
    private AccountRepository AccountRepository;

    @PostMapping("/account")
    public Account saveAccount(@RequestBody PostData postdata){
        String password = postdata.getHashedPassword();
        String pin = postdata.getPin();
        Account account;
        try {
            String hashedPassword = SecurityService.encrypt(password, pin);
            account = new Account(null, postdata.getServiceName(), postdata.getAccountName(), hashedPassword);
        }catch(Exception e){
            e.printStackTrace();
            account = new Account(null, null, null, null);
            return account;
        }
        return AccountRepository.save(account);
    }

    @GetMapping("/account/{id}")
    public Account getAccount(@PathVariable("id") String AccountId){
        return AccountRepository.getAccountById(AccountId);
    }

    @GetMapping("/accounts")
    public List<Account> getAll(){
        List<Account> temp = AccountRepository.getAllAccounts();
        for (Account a : temp) {
            a.setHashedPassword("hidden");
        }
        return temp;
    }

    @PostMapping("/account/view")
    public String getPassword(@RequestBody PostData postData){
        String password = "";
        Account currentAccount = getAccount(postData.getAccountId());
        try {
            String hashedPassword = currentAccount.getHashedPassword();
            String key = postData.getPin();
            password = SecurityService.decrypt(hashedPassword, key);
        }catch(Exception e){
            e.printStackTrace();
            password = "WP";
        }
        return password;
    }

    @DeleteMapping("/account/{id}")
    public String deleteAccount(@PathVariable("id") String accountId){
        return AccountRepository.delete(accountId);
    }

    @PutMapping("/account")
    public String updateAccount(@RequestBody PostData postdata){
        String password = postdata.getHashedPassword();
        String accountId = postdata.getAccountId();;
        String pin = postdata.getPin();
        Account account;
        try {
            String hashedPassword = SecurityService.encrypt(password, pin);
            account = new Account(postdata.getAccountId(), postdata.getServiceName(), postdata.getAccountName(), hashedPassword);
        }catch(Exception e){
            e.printStackTrace();
            account = new Account(null, null, null, null);
        }
        return AccountRepository.update(accountId,account);
    }

}